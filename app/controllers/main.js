var service = new Services();
var validation = new Validation();



function getEle(id){{
    return document.getElementById(id);
}}

function getListProducts(){{
   
    //lay danh sach san pham tu server
    var promise = service.getListProductsApi();
    promise
    .then(function(result){{
        renderListProduct(result.data);

    }})
    .catch(function(error){{
        console.log(error);
    }})

}}





function renderListProduct(data){
    var contentHTML = "";
    data.forEach(function(product, index){
        contentHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${product.taiKhoan}</td>
            <td>${product.matKhau}</td>
            <td>${product.hoTen}</td>
            <td>${product.email}</td>
            <td>${product.ngonNgu}</td>
            <td>${product.loaiND}</td>
            <td>
                <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editProduct(${product.id})">Sửa</button>
                <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Xóa</button>               
            </td>
        </tr>       
        `
    });

    getEle("tblDanhSachNguoiDung").innerHTML = contentHTML;
}


//xóa sp
function deleteProduct(id){
    service
    .deleteProductApi(id)
    .then(function (){
        //rendertable
        getListProducts();
    })
    .catch(function(error){
        console.log(error);
    })
}

getListProducts();

getEle("btnThemNguoiDung").onclick = function(){
    document.getElementsByClassName('modal-title')[0].innerHTML = "Thêm User";
    var footer = `<button id="btnThem" class="btn btn-success" onclick="kiemTra()" >Add</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
}

function addProduct(){
    
   
    var taiKhoan = getEle("TaiKhoan").value;
    var matKhau = getEle("MatKhau").value;
    var hoTen = getEle("HoTen").value;
    var email = getEle("Email").value;
    var loaiND = getEle("loaiNguoiDung").value;
    var ngonNgu = getEle("loaiNgonNgu").value;
    var moTa = getEle("MoTa").value;
    var hinhAnh = getEle("HinhAnh").value;


    var product = new Product("",taiKhoan,matKhau,hoTen,email,loaiND,ngonNgu,moTa,hinhAnh);

    
    service.addProductApi(product)
    .then(function (){
        getListProducts();

        //thêm xong tắt modal luôn
        document.getElementsByClassName("close")[0].click();
    })
    .catch(function(error){
        console.log(error);
    })
}
function kiemTra(){
    var taiKhoan = getEle("TaiKhoan").value;
    var matKhau = getEle("MatKhau").value;
    var hoTen = getEle("HoTen").value;
    var email = getEle("Email").value;
    var loaiND = getEle("loaiNguoiDung").value;
    var ngonNgu = getEle("loaiNgonNgu").value;
    var moTa = getEle("MoTa").value;
    var hinhAnh = getEle("HinhAnh").value;
    var isValid = true;

isValid &= validation.kiemTraRong(taiKhoan, "errorTaiKhoan", "(*) Vui lòng nhập tài khoản") && validation.kiemTraDoDaiKyTu(taiKhoan, "errorTaiKhoan",4,8, "(*) Vui lòng nhập 4 - 8 ký tự") && validation.kiemTraTaiKhoanTonTai(taiKhoan, "errorTaiKhoan", "Tài khoản đã tồn tại");
isValid &= validation.kiemTraRong(matKhau, "errorMatKhau", "(*) Vui lòng nhập mật khẩu") ;
isValid &= validation.kiemTraRong(hoTen, "errorHoTen", "(*) Vui lòng nhập họ tên");
isValid &= validation.kiemTraRong(email, "errorEmail", "(*) Vui lòng nhập Email")  && validation.kiemTraEmail(email, "errorEmail", "(*) Vui lòng nhập đúng Email");
isValid &= validation.kiemTraRong(loaiND, "errorloaiNguoiDung", "(*) Vui lòng nhập loại người dùng");
isValid &= validation.kiemTraNgonNgu("loaiNgonNgu", "errorloaiNgonNgu", "(*) Vui lòng chọn ngôn ngữ");
isValid &= validation.kiemTraRong(moTa, "errorMoTa", "(*) Vui lòng nhập mô tả") && validation.kiemTraDoDaiKyTu(moTa, "errorMoTa",1,60, "(*) Vui lòng nhập tối đa 60 ký tự");
isValid &= validation.kiemTraRong(hinhAnh, "errorHinhAnh", "(*) Vui lòng nhập hình ảnh");
if(isValid != 0){
    addProduct();
}
}






function editProduct(id){
    document.getElementsByClassName("modal-title")[0].innerHTML = "Sửa Sản Phẩm";
    var footer = `<button class="btn btn-success" onclick="updateProduct(${id})">Update</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;

    service.getProductById(id)
    .then(function(result){
        console.log(result.data);
        //show thông tin ra ngoài
        getEle("TaiKhoan").value = result.data.taiKhoan;
        getEle("MatKhau").value = result.data.matKhau;
        getEle("HoTen").value = result.data.hoTen;
        getEle("Email").value = result.data.email;
        getEle("loaiNguoiDung").value = result.data.loaiND;
        getEle("loaiNgonNgu").value = result.data.ngonNgu;
        getEle("MoTa").value = result.data.moTa;
        getEle("HinhAnh").value = result.data.hinhAnh;
    })
    .catch(function(error){
        console.log(error);
    });

}

function updateProduct(id){
    var taiKhoan = getEle("TaiKhoan").value;
    var matKhau = getEle("MatKhau").value;
    var hoTen = getEle("HoTen").value;
    var email = getEle("Email").value;
    var loaiND = getEle("loaiNguoiDung").value;
    var ngonNgu = getEle("loaiNgonNgu").value;
    var moTa = getEle("MoTa").value;
    var hinhAnh = getEle("HinhAnh").value;

    var product = new Product(id,taiKhoan,matKhau,hoTen,email,loaiND,ngonNgu,moTa,hinhAnh);

    service.updateProductApi(product)
    .then(function (){
        getListProducts();
    })
    .catch(function(error){
        console.log(error);
    })
    
    document.getElementsByClassName("close")[0].click();
}
