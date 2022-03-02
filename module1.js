class Table {
    constructor(init) {
      this.init = init;
    }
  
    createHeader(data) {
      let open = "<thead><tr>";
      let close = "</tr></thead>";
      data.forEach((d) => {
        open += `<th>${d}</th>`;
      });
  
      return open + close;
    }
  
    createBody(data) {
      let open = "<tbody>";
      let close = "</tbody>";
  
      data.forEach((d) => {
        open += `
          <tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
            <td>${d[2]}</td>
            <td>${d[3]}</td>
          </tr>
        `;
      });
  
      return open + close;
    }
  
    render(element) {
      let table =
        "<table class='table table-hover'>" +
        this.createHeader(this.init.columns) +
        this.createBody(this.init.data) +
        "</table>";
      element.innerHTML = table;
    }
  }
  const table = new Table({
      columns: ["Nama", "Alamat", "Email", "No Tlp"],
        data: [
          ["Embun", "Jakarta", "embun@gmail.com", "081377689954"],
          ["Jamaludin", "Cilacap", "jamaludin@gmail.com", "087665887566"],
          ["Imelza", "Padang", "imleza@gmail.com", "0812557897004"]
        ]
        });
    const app = document.getElementById("app");
    table.render(app);
  
    export default Table;