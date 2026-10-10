import readline from 'readline';
import { index, store, destroy } from './controller.mjs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const menu = () => {
    console.log("\n=== MENU UTAMA ===");
    console.log("1. Lihat Data (Index)");
    console.log("2. Tambah Data (Store)");
    console.log("3. Hapus Data Berdasarkan Nama (Destroy)");
    console.log("4. Keluar");
    
    rl.question("Pilih menu (1-4): ", (choice) => {
        switch (choice.trim()) {
            case '1':
                index();
                menu();
                break;
            case '2':
                rl.question("Masukkan Nama: ", (nama) => {
                    rl.question("Masukkan Umur: ", (umur) => {
                        rl.question("Masukkan Alamat: ", (alamat) => {
                            rl.question("Masukkan Email: ", (email) => {
                                store(nama, Number(umur), alamat, email);
                                menu();
                            });
                        });
                    });
                });
                break;
            case '3':
                index();
                rl.question("Masukkan nama data yang ingin dihapus: ", (targetNama) => {
                    destroy(targetNama);
                    menu();
                });
                break;
            case '4':
                console.log("Keluar dari program.");
                rl.close();
                break;
            default:
                console.log("Pilihan tidak valid.");
                menu();
                break;
        }
    });
};

menu();