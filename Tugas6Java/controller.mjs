import users from "./data.mjs";

export const index = () => {
    console.log("\n=== DAFTAR USER ===");
    users.map((user, i) => {
        console.log(`${i + 1}. Nama: ${user.nama} | Umur: ${user.umur} | Alamat: ${user.alamat} | Email: ${user.email}`);
    });
};

export const store = (nama, umur, alamat, email) => {
    users.push({ nama, umur, alamat, email });
    console.log(`\nData ${nama} berhasil ditambahkan!`);
};

export const destroy = (targetNama) => {
    const indexTarget = users.findIndex(user => user.nama.toLowerCase() === targetNama.toLowerCase());
    
    if (indexTarget !== -1) {
        const deleted = users.splice(indexTarget, 1);
        console.log(`\nData ${deleted[0].nama} berhasil dihapus!`);
    } else {
        console.log(`\nData dengan nama "${targetNama}" tidak ditemukan!`);
    }
};

export { users };