$(document).ready(function(){
    //아이디 유효성 체크
    $('#id_check').click(function(){
        /*var id_condition='';*/
       if($('#id').val()==''){
           alert('아이디를 입력하세요');
       }else if($('#id').val()=='som'){
           var result=confirm('이미 있는 아이디입니다. 회원가입창으로 이동할까요?');
           if(result)
               {
                   location.replace('login.html');
               }
           else
               {
                   $('#id').val('');
               }

       }else{
           alert('사용할 수 있는 아이디입니다');
           /*var id_condition=true;*/
       }
    });

    //비밀번호확인
    $(function(){
        $('#pw_mismatched').hide();
        $('.pw_class').keyup(function(){
            var pw1=$('#pw').val();
            var pw2=$('#pw_check').val();
            if(pw1!=''||pw2!=''){
            if(pw1==pw2){
                $('#pw').css({'backgroundColor':'rgb(0,0,200,0.5)'});
                $('#pw_check').css({'backgroundColor':'rgb(0,0,255,0.5)'});
                $('#pw_mismatched').slideUp(500);
            }else{
                $('.pw_class').css({'backgroundColor':'rgb(255,0,0,0.5)'});
                $('#pw_mismatched').slideDown(2000);
            }
            }
        });
    });


    //내부 텍스트 없애기
    $('#year').click(function(){
       $(this).val('');
    });
    $('#day').click(function(){
       $(this).val('');
    });
    $('#input_check').click(function(){
       $(this).val('');
    });


    $('.btn_sign').click(function(){
        var pw_condition='';
        var name_condition='';
       if($('#id').val()==$('#pw').val()){
            alert('아이디와 비밀번호는 달라야 합니다');
           $('#pw').val('');
           $('#pw_check').val('');
          }//아이디와 비밀번호가 같은지 확인
        else{
            var pw_condition=true;
        }
        var nameCheck = RegExp(/^[가-힣]{2,6}$/);
       if(!nameCheck.test($('#name').val())){
            alert('이름은 2~6글자의 한글이어야 합니다.')
           $('#name').val('');
          }//이름 유효성 검사
        else{
              var name_condition=true;
          }
        var id_alert=$('#id').val();
        if(pw_condition==true&&name_condition==true){
            alert('환영합니다 '+id_alert+' 님');
            location.replace('main+css.html');
        }
    });



});
