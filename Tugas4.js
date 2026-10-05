// 1. Class Kendaraan (Superclass)
class Kendaraan {
  constructor(id, merk, platNomor) {
    this.id = id;
    this.merk = merk;
    this.platNomor = platNomor;
    this.statusSewa = false; // Status awal: belum disewa
  }

  sewa() {
    this.statusSewa = true;
  }

  kembalikan() {
    this.statusSewa = false;
  }
}

// Subclass Kendaraan untuk jenis spesifik
class Mobil extends Kendaraan {
  constructor(id, merk, platNomor, tipeBensin) {
    super(id, merk, platNomor);
    this.tipeBensin = tipeBensin;
  }
}

class Motor extends Kendaraan {
  constructor(id, merk, platNomor, cc) {
    super(id, merk, platNomor);
    this.cc = cc;
  }
}

// 2. Class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = []; // Menyimpan daftar kendaraan yang disewa pelanggan
  }

  // Metode untuk mencatat transaksi penyewaan
  sewaKendaraan(kendaraan) {
    if (!kendaraan.statusSewa) {
      kendaraan.sewa();
      this.kendaraanDisewa.push(kendaraan);
      console.log(`[BERHASIL] ${this.nama} berhasil menyewa ${kendaraan.merk} (${kendaraan.platNomor}).`);
    } else {
      console.log(`[GAGAL] Kendaraan ${kendaraan.merk} (${kendaraan.platNomor}) sedang disewa orang lain.`);
    }
  }
}

// 3. Class SistemManajemenTransportasi
class SistemManajemenTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  // Metode untuk menampilkan daftar pelanggan yang sedang menyewa kendaraan
  tampilkanPelangganMenyewa() {
    console.log("\n==============================================");
    console.log("   DAFTAR PELANGGAN YANG SEDANG MENYEWA       ");
    console.log("==============================================");

    // Filter pelanggan yang memiliki setidaknya 1 kendaraan disewa
    const pelangganAktif = this.daftarPelanggan.filter(
      (p) => p.kendaraanDisewa.length > 0
    );

    if (pelangganAktif.length === 0) {
      console.log("Saat ini tidak ada pelanggan yang sedang menyewa.");
      return;
    }

    pelangganAktif.forEach((pelanggan, index) => {
      console.log(`${index + 1}. Nama          : ${pelanggan.nama}`);
      console.log(`   No. Telepon   : ${pelanggan.nomorTelepon}`);
      console.log("   Kendaraan Disewa:");
      
      pelanggan.kendaraanDisewa.forEach((k, i) => {
        console.log(`      - ${k.merk} [${k.platNomor}]`);
      });
      console.log("----------------------------------------------");
    });
  }
}

// ==========================================
// SIMULASI TRANSAKSI DAN PENGUJIAN
// ==========================================

// Inisialisasi Sistem
const sistem = new SistemManajemenTransportasi();

// Inisialisasi Kendaraan
const mobil1 = new Mobil(1, "Toyota Avanza", "B 1234 ABC", "Pertalite");
const mobil2 = new Mobil(2, "Honda CR-V", "B 5678 XYZ", "Pertamax");
const motor1 = new Motor(3, "Yamaha NMAX", "B 9999 DEF", 155);

// Inisialisasi Pelanggan
const pelanggan1 = new Pelanggan("Nino Sebastiano", "081234567890");
const pelanggan2 = new Pelanggan("Budi Santoso", "089876543210");

// Daftarkan Pelanggan ke Sistem
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

// Transaksi Penyewaan
pelanggan1.sewaKendaraan(mobil1);
pelanggan1.sewaKendaraan(motor1);
pelanggan2.sewaKendaraan(mobil2);

// Mencoba menyewa kendaraan yang sudah disewa
pelanggan2.sewaKendaraan(mobil1);

// Tampilkan Daftar Pelanggan yang Sedang Menyewa
sistem.tampilkanPelangganMenyewa();