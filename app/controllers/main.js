$(document).ready(function () {
    var danhSachNguoiDung = new DanhSachNguoiDung();

    function themNguoiDung(){
        console.log("them nguoi dung 2");
    }
    
    getListUser();


    function getListUser() {
        danhSachNguoiDung.layDanhSachNguoiDung()
        .done(function (result) {
            taoBang(result);
        })
        .fail(function (error) {
            console.log(error);
        });
    };
    $("#btnThemNguoiDung").click(function(){
        $(".modal-title").html("Them nguoi dung");
        var footer = `
        <button id="btnThem" class = "btn btn-success">Them</button>
        `;
        $(".modal-footer").html(footer);
    })

    // Chuc nang them
    $("body").delegate("#btnThem", "click", function(){
        var taiKhoan = $("#TaiKhoan").val();
        var matKhau = $("#MatKhau").val();
        var hoTen = $("#HoTen").val();
        var email = $("#Email").val();
        var soDT = $("#SoDienThoai").val();
        var maLoaiNguoiDung = $("#loaiNguoiDung").val();

        var nguoiDung = new NguoiDung (taiKhoan, matKhau, hoTen, email, soDT, maLoaiNguoiDung);
        danhSachNguoiDung.themNguoiDung(nguoiDung)
        .done(function(result){
            getListUser();
        })
        .fail(function(){
            console.log(error);
        });
    });

    // Chuc nang xoa
    $("body").delegate(".btnXoa", "click", function(){
        var id = $(this).data("id");
        danhSachNguoiDung.xoaNguoiDung(id)
        .done(function (result) {
            
            getListUser(result);
        })
        .fail(function(error){
            console.log(error);
        });


    })
    // Lay thong tin nguoi dung
    $("body").delegate(".btnSua", "click", function(){
        $(".modal-title").html("Sua nguoi dung")
        var id = $(this).data("id");
        var footer = `
        <button id = "btnCapNhat" class ="btn btn-success" data-id="${id}">Cap Nhat</button>
        `;
        $(".modal-footer").html(footer);
        danhSachNguoiDung.layThongTinNguoiDung(id)
        .done(function(result){
            $("#TaiKhoan").val(result.taiKhoan);
            $("#HoTen").val(result.hoTen);
            $("MatKhau").val(result.matKhau);
            $("#Email").val(result.email);
            $("#SoDienThoai").val(result.soDT);
            $("#loaiNguoiDung").val(result.maLoaiNguoiDung);
        })
        .fail(function(error){
            console.log(error);
        });
        
    })
    // Chuc nang cap nhat
    $("body").delegate("#btnCapNhat", "click", function(){
        var id = $(this).data("id");
        var taiKhoan = $("#TaiKhoan").val();
        var matKhau = $("#MatKhau").val();
        var hoTen = $("#HoTen").val();
        var email = $("#Email").val();
        var soDT = $("#SoDienThoai").val();
        var maLoaiNguoiDung = $("#loaiNguoiDung").val();

        var nguoiDung = new NguoiDung (taiKhoan, matKhau, hoTen, email, soDT, maLoaiNguoiDung);

        danhSachNguoiDung.capNhatNguoiDung(id, nguoiDung)
        .done(function(result){
            
            getListUser();
        })
        .fail(function(err) {
            
        })
    })


    function taoBang(mang) {

        var content = "";
        mang.map(function (item, index) {
            content += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.taiKhoan}</td>
            <td>${item.matKhau}</td>
            <td>${item.hoTen}</td>
            <td>${item.email}</td>
            <td>${item.soDT}</td>
            <td>${item.maLoaiNguoiDung}</td>
            <td>
             <button class="btnSua btn btn-info" data-toggle="modal" data-target="#myModal" data-id="${item.id}">Sua</button>
             <button class=" btnXoa btn btn-danger" data-id="${item.id}">Xoa</button>
            </td>
        </tr>
        `;
        })
        $("#tblDanhSachNguoiDung").html(content);
    };

});