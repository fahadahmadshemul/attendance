  /**===== find category by menu name */ 
  $('body').on('change', '#chapter_id', function(){
    
    var chapter_id = $(this).val();
    $('#topic_id option').remove();
    $.ajax({
      url: 'get-topic-by-category'+'/'+chapter_id,
      method: 'get',
      success: function(result){
        $("#topic_id").append($('<option></option>').val('').html('Please Select'));
        $.each(result, function (key, value) {
        $("#topic_id").append($('<option></option>').val(value.id).html(value.topic_name));
        });
        console.log(result);
      }
    });
  });
  
  /**===== find category by menu name end */ 

  $('body').on('change', '#question_type', function(){
    var question_type = $(this).val();
    if(question_type == 1)
    {
      $('#question_name').removeClass('d-none');
      $('#question_name_img').addClass('d-none');
    }else if(question_type == 2)
    {
      $('#question_name').addClass('d-none');
      $('#question_name_img').removeClass('d-none');
    }
  });

  $('body').on('change', '#option_one_type', function(){
    var type = $(this).val();
    if(type == 1)
    {
      $('#option_one').removeClass('d-none');
      $('#option_one_img').addClass('d-none');
    }else if(type == 2)
    {
      $('#option_one').addClass('d-none');
      $('#option_one_img').removeClass('d-none');
    }
  });

  $('body').on('change', '#option_two_type', function(){
    var type = $(this).val();
    if(type == 1)
    {
      $('#option_two').removeClass('d-none');
      $('#option_two_img').addClass('d-none');
    }else if(type == 2)
    {
      $('#option_two').addClass('d-none');
      $('#option_two_img').removeClass('d-none');
    }
  });

  $('body').on('change', '#option_three_type', function(){
    var type = $(this).val();
    if(type == 1)
    {
      $('#option_three').removeClass('d-none');
      $('#option_three_img').addClass('d-none');
    }else if(type == 2)
    {
      $('#option_three').addClass('d-none');
      $('#option_three_img').removeClass('d-none');
    }
  });
  
  $('body').on('change', '#option_four_type', function(){
    var type = $(this).val();
    if(type == 1)
    {
      $('#option_four').removeClass('d-none');
      $('#option_four_img').addClass('d-none');
    }else if(type == 2)
    {
      $('#option_four').addClass('d-none');
      $('#option_four_img').removeClass('d-none');
    }
  });
  
  


  