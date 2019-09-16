function DanhSachNguoiDung() {


    // Lay thong tin nguoi dung
    this.layDanhSachNguoiDung = function () {
        return $.ajax({
            url: "http://5d78df45a8c27100149866a5.mockapi.io/api/NguoiDung",
            type: "GET",
        });
    };
    // Them nguoi dung
    this.themNguoiDung = function(nguoiDung){
        return $.ajax({
            url: "http://5d78df45a8c27100149866a5.mockapi.io/api/NguoiDung",
            type: "POST",
            data: nguoiDung,
        });
    }
   
}
// Xoa nguoi dung
DanhSachNguoiDung.prototype.xoaNguoiDung = function(id){
     return $.ajax({
         url: `http://5d78df45a8c27100149866a5.mockapi.io/api/NguoiDung/${id}`, /* cach 1*/
         type: "DELETE",

     })

}
DanhSachNguoiDung.prototype.layThongTinNguoiDung = function(id){
    return $.ajax({
        url: "http://5d78df45a8c27100149866a5.mockapi.io/api/NguoiDung/" + id, /* cach 2*/
        type: "GET",
    })
}
// Cap nhat nguoi dung
DanhSachNguoiDung.prototype.capNhatNguoiDung = function(id, nguoiDung){
    console.log(id, nguoiDung);
    return $.ajax({
        url: `http://5d78df45a8c27100149866a5.mockapi.io/api/NguoiDung/${id}`,
        type: "PUT",
        data: nguoiDung,
    })
}
