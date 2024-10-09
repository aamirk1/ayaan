$(document).ready(function () {
    $("input[name$='bn']").click(function () {
        var radio_value = $(this).val();
        if (radio_value == '2') {
            $("#onebn").hide();
            $("#twobn").show();
            $("#threebn").hide();
        } else if (radio_value == '3') {
            $("#onebn").hide();
            $("#twobn").hide();
            $("#threebn").show();
        } else if (radio_value == '1') {
            $("#onebn").show();
            $("#twobn").hide();
            $("#threebn").hide();
        }
    });
    $('[name="bn"]:checked').trigger('click');
});

$(document).ready(function () {
    $("input[name$='bn1']").click(function () {
        var radio_value = $(this).val();
        if (radio_value == '2') {
            $("#onebn1").hide();
            $("#twobn1").show();
            $("#threebn1").hide();
        } else if (radio_value == '3') {
            $("#onebn1").hide();
            $("#twobn1").hide();
            $("#threebn1").show();
        } else if (radio_value == '1') {
            $("#onebn1").show();
            $("#twobn1").hide();
            $("#threebn1").hide();
        }
    });
    $('[name="bn1"]:checked').trigger('click');
});


$(document).ready(function () {
    $('input[type="radio"]').click(function () {
        var inputValue = $(this).attr("value");
        var target = $("." + inputValue);
        $(".selects").not(target).hide();
        $(target).show();
    }).filter(':checked').click();
});

/*********************For Search bar*************************/
function myTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


// price tabs months
document.mainForm.onclick = function() {
    var radVal = document.mainForm.radvs.value;
    result1.innerHTML = 'INR ' + radVal;
}

// price tabs months
document.plainForm.onclick = function() {
    var tabVal = document.plainForm.tabvs.value;
    parinam.innerHTML = 'INR ' + tabVal;
}


