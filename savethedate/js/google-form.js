$(function(){
	  // console.log("js include");


	  	var iframe = document.getElementById('google-form');

		// iframe.addEventListener('load', function() {
		//   console.log(iframe.contents().querySelector('form + div'))
		// })

	  $("#google-form").on("load", function() {




	  	let head = $("#google-form").contents().find("head");
	  	// alert(head); 
	  	// alert(head); 
	  	console.log($("#google-form").contents().html());
		let url = "css/google-form.css";
		$(head).append("<div>kkk</div>");
		$(head).append($("<link/>", { rel: "stylesheet", href: url, type: "text/css" } ));


	  let html = $("#google-form");
	  // let head = html.find("head");
	  console.log(html);
	  let css = '<style> body.freebirdFormviewerViewEmbedded{ overflow-y: hidden !important;} .m2 .freebirdFormviewerViewNavigationPasswordWarning ,.freebirdFormviewerViewFooterEmbeddedBackground{ display:none !important;} .freebirdThemedFilledButtonM2{ width:100% !important; margin-right: 0px !important;}</style>';
	  $(html).append(css);
	  // $(html).append("hello");
	});

      // $("#google-form").on("load", function(e){
      // 		console.log("ifrmae include");
      // 		console.log($("#google-form"));
      // 		console.log($("#google-form").contents());
      // 		console.log($("#google-form").contents().find("body.freebirdFormviewerViewEmbedded"));
      // 		console.log($("#google-form").contents().find("body.freebirdFormviewerViewEmbedded"));
      // 		$("#google-form").contents().find(".m2").remove(); 
      //       $("#google-form").contents().find("body.freebirdFormviewerViewEmbedded").css("overflow-y", "hidden !important"); 
      //       $("#google-form").contents().find(".m2 .freebirdFormviewerViewNavigationPasswordWarning").remove(); 
      //       $("#google-form").contents().find(".freebirdFormviewerViewFooterEmbeddedBackground").remove(); 
	     //    $("#google-form").contents().find(".freebirdFormviewerViewFooterEmbeddedBackground").css("width", "100% !important"); 
	     //    $("#google-form").contents().find(".freebirdFormviewerViewFooterEmbeddedBackground").css("margin-right", "0px !important;"); 

      // });

})





// var cssLink = window.document.createElement("link");
// cssLink.href = "css/google-form.css"; 
// cssLink.rel = "stylesheet"; 
// cssLink.type = "text/css"; 
// frames['frameName'].document.body.appendChild(cssLink);