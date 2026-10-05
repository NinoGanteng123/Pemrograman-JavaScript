let produkToko = [
   {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
   {id: 2, nama: "Mouse", harga: 200000, stok: 10},
   {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

function tambahProduk(nama, harga, stok) {
    // Generate ID baru berdasarkan ID produk terakhir, atau 1 jika array kosong
    const idBaru = produkToko.length > 0 ? Math.max(...produkToko.map(p => p.id)) + 1 : 1;
    produkToko.push({ id: idBaru, nama: nama, harga: harga, stok: stok });
    console.log(`Produk "${nama}" berhasil ditambahkan.`);
}

function hapusProduk(id) {
    const index = produkToko.findIndex(produk => produk.id === id);
    if (index !== -1) {
        const produkDihapus = produkToko.splice(index, 1);
        console.log(`Produk "${produkDihapus[0].nama}" berhasil dihapus.`);
    } else {
        console.log(`Produk dengan ID ${id} tidak ditemukan.`);
    }
}

function tampilkanProduk() {
    console.log("\n=== Daftar Produk Toko ===");
    if (produkToko.length === 0) {
        console.log("Tidak ada produk tersedia.");
    } else {
        produkToko.forEach(produk => {
            console.log(`ID: ${produk.id} | Nama: ${produk.nama} | Harga: Rp${produk.harga} | Stok: ${produk.stok}`);
        });
    }
    console.log("==========================\n");
}

// === Uji Coba Fungsi ===
console.log("Menampilkan produk awal:");
tampilkanProduk();

console.log("Menambahkan produk baru (Headset):");
tambahProduk("Headset", 150000, 15);
tampilkanProduk();

console.log("Menghapus produk dengan ID 2 (Mouse):");
hapusProduk(2);
tampilkanProduk();
