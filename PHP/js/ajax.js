function showHint(str) {
    confirm('Are you sure want to delete this record');
    
    if (str.length == 0) {
      document.getElementById("updateData").innerHTML = "";
      return;
    } else {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("updateData").innerHTML = this.responseText;
        }
      };
      xmlhttp.open("GET", "manageCategory.php?deleteId=" + str, true);
      xmlhttp.send();
    }
  }

  function showHintPost(str) {
    confirm('Are you sure want to delete this record');
    
    if (str.length == 0) {
      document.getElementById("updateData").innerHTML = "";
      return;
    } else {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("updateData").innerHTML = this.responseText;
        }
      };
      xmlhttp.open("GET", "blogPost.php?deleteId=" + str, true);
      xmlhttp.send();
    }
  }
