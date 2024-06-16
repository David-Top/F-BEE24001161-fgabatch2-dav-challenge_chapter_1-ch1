let saldo = 1000000;
console.log(saldo);

function tambahSaldo() {
  let sum = Number(
    window.prompt("Masukan nominal yang ingin Anda setorkan", "")
  );
  saldo = saldo + sum;
  console.log("Saldo Anda ", saldo);
  return saldo;
}

function kurangiSaldo() {
  let sum = Number(window.prompt("Masukan nominal yang ingin Anda ambil", ""));
  saldo = saldo - sum;
  console.log("Saldo Anda ", saldo);
  return saldo;
}

// console.log(tambahSaldo(1000));
