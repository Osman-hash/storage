function burgerclick()
{
   var height = $(window).height();
   var width = $(window).width();

	// ���� ��������� ���������� ����������
    if(width < height) 
	{
		if($('.mainmenu').css("display") == "none")
		{
			$('.mainmenu').fadeIn();
			$('img#pointer').css("webkit-transform", "rotate(-180deg)");
			$('.burgermenuportrait').css("top", "780px");
			$('#headerpage').css("top", "150px");
			$('#step').css("top", "240px");	
			return;
		}
		if($('.mainmenu').css("display") == "block")	
		{
			$('.mainmenu').fadeOut();
			$('.burgermenuportrait').css("top", "300px");
			$('#headerpage').css("top", "100px");
			$('#step').css("top", "210px");	
			$('img#pointer').css("webkit-transform", "rotate(0deg)");
			return;
		}
	}
	if(width > height) /* ���� ����������� ���������� ����������*/
	{
		if($('.mainmenu').css("display") == "none")
		{
			$('.mainmenu').css("display", "block");
			$('img#pointer').css("webkit-transform", "rotate(-180deg)");
			$('.burgermenulandscape').css("top", "400px");
			return;
		}
		if($('.mainmenu').css("display") == "block")
		{
			$('.mainmenu').css("display", "none");
			$('.burgermenulandscape').css("top", "200px");
			$('img#pointer').css("webkit-transform", "rotate(0deg)");
			return;
		}
	}
}

/* �-� ��� ����� ���������� ���������� */
$(window).resize(function()
{
    var height = $(window).height();
    var width = $(window).width();

    if(width < height) /* ���� � ���������� ��������� ���������� */
	{
		if($('.mainmenu').css("display") == "block")	
		{
		}
		else
		{
		}
    } 
	if(width > height) /* ���� � ���������� ����������� ���������� */
	{
		if($('.mainmenu').css("display") == "block")	
		{
		}
		else
		{
		}	
    }
});	