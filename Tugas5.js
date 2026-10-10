const readline = require('readline');

let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 3500000 },
  { id: 4, nama: "Headset", harga: 500000 },
  { id: 5, nama: "Smartwatch", harga: 1500000 }
];

function tampilkanProduk() {
  console.log("\n=== DAFTAR PRODUK ===");
  if (produkList.length === 0) {
    console.log("Belum ada produk.");
    return;
  }
  
  produkList.forEach((produk) => {
    const { id, nama, harga } = produk;
    console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp ${harga.toLocaleString('id-ID')}`);
  });
}

function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };
  produkList = [...produkList, produkBaru];
  console.log(`\nProduk "${nama}" berhasil ditambahkan!`);
}

function hapusProduk(...idUntukDihapus) {
  const [id] = idUntukDihapus;
  const index = produkList.findIndex(produk => produk.id === Number(id));
  
  if (index !== -1) {
    const produkDihapus = produkList[index];
    produkList = produkList.filter(produk => produk.id !== Number(id));
    console.log(`\nProduk "${produkDihapus.nama}" (ID: ${id}) berhasil dihapus!`);
  } else {
    console.log(`\nProduk dengan ID ${id} tidak ditemukan.`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const eventHandler = {
  menu() {
    console.log("\n=========================");
    console.log("MENU MANAJEMEN PRODUK");
    console.log("1. Tampilkan Semua Produk");
    console.log("2. Tambah Produk");
    console.log("3. Hapus Produk");
    console.log("4. Keluar");
    
    rl.question("Pilih menu (1-4): ", (pilihan) => {
      this.eksekusiPilihan(pilihan);
    });
  },

  eksekusiPilihan(pilihan) {
    switch (pilihan.trim()) {
      case '1':
        tampilkanProduk();
        this.menu();
        break;

      case '2':
        rl.question("Masukkan ID Produk: ", (id) => {
          rl.question("Masukkan Nama Produk: ", (nama) => {
            rl.question("Masukkan Harga Produk: ", (harga) => {
              tambahProduk(Number(id), nama, Number(harga));
              this.menu();
            });
          });
        });
        break;

      case '3':
        rl.question("Masukkan ID Produk yang ingin dihapus: ", (id) => {
          hapusProduk(Number(id));
          this.menu();
        });
        break;

      case '4':
        console.log("Terima kasih!");
        rl.close();
        break;

      default:
        console.log("Pilihan tidak valid, silakan coba lagi.");
        this.menu();
        break;
    }
  }
};

eventHandler.menu();

