function Validation(){
    this.kiemTraRong = function (value, errorId, mess){
        if (value === ""){
            //error
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        }else {
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }
    }


    this.kiemTraNgonNgu = function(selectId, errorId, mess){
        if(getEle(selectId).selectedIndex != 0){
            //true 
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        } else{
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        }
    }

    this.kiemTraDoDaiKyTu = function(value, errorId,min,max, mess){
        if(value.trim().length >= min && value.length < max){
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        } else{
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        
        }
    }

    this.kiemTraChuoiKyTu = function(value, errorId, mess){
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if(value.match(letter)){
            //true
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        } else{
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        //false
        }
    }

    this.kiemTraTaiKhoanTonTai = function(value, errorId, mess){
        var isStatus = true;
        arr = [];

        arr.forEach(function(item){
            if(item.taiKhoan === value){
                //Mã tồn tại
                isStatus = false;

            }
        });

        if(isStatus){
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;

        }else{
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        }
    }

    this.kiemTraEmail = function(value,errorId,mess){
        var email = document.getElementById('Email'); 
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
        if (!filter.test(email.value)) { 
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;

        }else{
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
    }
}
}