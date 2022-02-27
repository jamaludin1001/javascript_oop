new gridjs.Grid({
    columns: ["Nama", "Alamat", "Email", "No Tlp"],
    data: [
      ["Embun", "Jakarta", "embun@gmail.com", "081377689954"],
      ["Jamaludin", "Cilacap", "jamaludin@gmail.com", "087665887566"],
    ]
  }).render(document.getElementById("wrapper"));