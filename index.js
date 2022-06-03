const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (names, callback) => {
  const sortingItems = names.sort()
    .map((name, i) => `${i + 1}. ${name}`);
    
  return callback(sortingItems);
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = items => {
  const splitItems = items.map(item => item.split(". "))
    .map(data => data[1]);

  return splitItems.sort()
    .map((name, i) => `${i + 1}. ${name}`);
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = items => {
  const splitItems = items.map(item => item.split(". "))
    .map(data => data[1]);

  return splitItems.sort().reverse()
    .map((name, i) => `${i + 1}. ${name}`);
};;

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
