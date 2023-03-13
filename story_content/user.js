function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6FRNNwg0Wad":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyGE6OYO8iX-gVEEBm1VWeJvmJ-ZNVDa_pdv0Zy4kQrIKv6OO03y0-LIjjb-keDq7mr/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

