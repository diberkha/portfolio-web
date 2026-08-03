import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nama, email, dan pesan harus diisi." },
        { status: 400 }
      );
    }

    if (
      process.env.MYSQL_HOST &&
      process.env.MYSQL_USER &&
      process.env.MYSQL_PASSWORD &&
      process.env.MYSQL_DATABASE
    ) {
      try {
        const { createPool } = await import("mysql2/promise");
        const pool = createPool({
          host: process.env.MYSQL_HOST,
          user: process.env.MYSQL_USER,
          password: process.env.MYSQL_PASSWORD,
          database: process.env.MYSQL_DATABASE,
          port: Number(process.env.MYSQL_PORT || 3306),
        });

        await pool.query(
          "INSERT INTO contacts (sender_name, sender_email, message) VALUES (?, ?, ?)",
          [name, email, message]
        );

        await pool.end();
        return NextResponse.json({
          success: true,
          message: "Pesan Anda berhasil terkirim dan disimpan di database MySQL!",
        });
      } catch (dbErr) {
        console.warn("MySQL insert error, fallback response sent.", dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Terima kasih! Pesan Anda telah diterima.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}
