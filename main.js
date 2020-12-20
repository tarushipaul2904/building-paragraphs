function getpara1()
{
    var inputs = [];

    for(var i = 1 ; i<=6 ; i++)
    {
        inputs.push(document.getElementById("para_box_" + i).value);
    }
    document.getElementById("show_para_1").innerHTML = inputs.join(".");
}

function get_para2()
{
    var paragraph = [];

    for(var z = 1; z<=6; z++)
    {
        paragraph.push(document.getElementById("para2_box_" + z).value);
    }
    document.getElementById("show_para_2").innerHTML = paragraph.join(".");
}