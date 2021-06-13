


$(document).ready(function () {
    
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $("#create_user").click(function () {
        $("#humans").val("Save");
        $("#action").val("Save");
    });

   
    $("#ajax_form").on('submit', function(e){

        e.preventDefault();
            if($("#action").val() == "Save"){
                var familya = $("input[name=familya]").val();
                var ism =   $("input[name=ism]").val();
                var sharif = $("input[name=sharif]").val();
                var tug_mil = $("textarea[name=tug_mil]").val();
                var malumoti = $("textarea[name=malumoti]").val();
                var uzel_lavo = $("textarea[name=uzel_lavo]").val();
                var ish_staj = $("input[name=ish_staj]").val();
                var yoga_mux = $("input[name=yoga_mux]").val();
                var yashashjoy = $("input[name=yashashjoy]").val();
                var pasport = $("textarea[name=pasport]").val();
                var ox_mal_osh = $("textarea[name=ox_mal_osh]").val();
                var qay_yun = $("textarea[name=qay_yun]").val();
                var vaqt = $("input[name=vaqt]").val();
                var yunalish = $("input[name=yunalish]").val();
            
                $.ajax({
                   url:"{{ route('ajax-crud.store') }}",
                   method:'POST',
                   data:{
                          familya:familya,
                          ism:ism,
                          sharif:sharif,
                          tug_mil:tug_mil,
                          malumoti:malumoti,
                          uzel_lavo:uzel_lavo,
                          ish_staj:ish_staj,
                          yoga_mux:yoga_mux,
                          yashashjoy:yashashjoy,
                          pasport:pasport,
                          ox_mal_osh:ox_mal_osh,
                          qay_yun:qay_yun,
                          vaqt:vaqt,
                          yunalish:yunalish
                        
                        },
                   success:function(response){
                    console.log(response.data);
                      if(response.success){
                          
                          alert(response.message) //Message come from controller
                          //  $('#ajaxModal').toggle();
                           $('#ajax_form')[0].reset();
                           $('#user_table').DataTable().ajax.reload();
                        
                        //    $('#user_table').DataTable().ajax.reload();
                        //   $('#ajaxModal').modal('toggle');
                        // $('#ajaxModal').modal().hide();
                        // $('#ajaxModal').removeClass('show');
                      
                      }
                      else{
                          alert("Error");
                      }
                   },
                   error:function(error){
                      console.log(error)
                   }
                 })  
            }
        

         if($("#action").val() == "Edit")
         {
            $.ajax({
                url: "{{ route('ajax-crud.update') }}",
                // headers: {'X-CSRF-TOKEN': '{{ csrf_token() }}'},
                method : "POST",
                data:{
                    familya:familya,
                    ism:ism,
                    sharif:sharif,
                    tug_mil:tug_mil,
                    malumoti:malumoti,
                    uzel_lavo:uzel_lavo,
                    ish_staj:ish_staj,
                    yoga_mux:yoga_mux,
                    yashashjoy:yashashjoy,
                    pasport:pasport,
                    ox_mal_osh:ox_mal_osh,
                    qay_yun:qay_yun,
                    vaqt:vaqt,
                    yunalish:yunalish
                  
                  },
                //   contentType : false,
                //   cache: false,
                //   processData : false,
                  dataType: "json",
                 success : function (data)
                {
                    if(data.success)
                    {
                        alert(data.message) //Message come from controller
                        //  $('#ajaxModal').toggle();
                         $('#ajax_form')[0].reset();
                         $('#user_table').DataTable().ajax.reload();
                    }
                    else{
                        alert("Error");
                    }
                },
                error:function(error){
                    console.log(error)
                 }
                
            })
         }
    });

    $(document).on('click', '.edit', function() {
        var id = $(this).attr('id');
        $.ajax({
            url: "/ajax-crud/"+id+"/edit",
            dataType: "json",
            success: function (html){
                $("#familya").val(html.data.familya);
                $("#ism").val(html.data.ism);
                $("#sharif").val(html.data.sharif);
                $("#tug_mil").val(html.data.tug_mil);
                $("#malumoti").val(html.data.malumoti);
                $("#uzel_lavo").val(html.data.uzel_lavo);
                $("#ish_staj").val(html.data.ish_staj);
                $("#yoga_mux").val(html.data.yoga_mux);
                $("#yashashjoy").val(html.data.yashashjoy);
                $("#pasport").val(html.data.pasport);
                $("#ox_mal_osh").val(html.data.ox_mal_osh);
                $("#qay_yun").val(html.data.qay_yun);
                $("#vaqt").val(html.data.vaqt);
                $("#yunalish").val(html.data.yunalish);

                $("#hidden_id").val(html.data.id);
                $(".modal-title").text("Edit New Record");
                $("#humans").val("Edit");
                $("#action").val("Edit");
                $("#ajaxModal").modal('show');

                console.log(html.data.id);
            }
        })
    });
  })


