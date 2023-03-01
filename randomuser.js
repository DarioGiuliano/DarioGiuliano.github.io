$(document).ready(function() {
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      _success: function (data) {
        var user = data.results[0];

        var firstName = user.name.first;
        var lastName = user.name.last;
        var fullName = firstName + ' ' + lastName;
        var email = user.email;
        var phone = user.phone;
        var age = user.dob.age;
        var adressStreetName = user.location.street.name;
        var adressStreetNumber = user.location.street.number;
        var photo = user.picture.large;

        var pdFirstName = "Nombre: " + user.name.first;
        var pdLastName = "Apellido: " + user.name.last;
        var pdEmail = "Email: " + user.email;
        var pdPhone = "Teléfono: " + user.phone;
        var pdAge = "Edad: " + user.dob.age;
        var pdAdress = "Dirección: " + user.location.street.name + " " + user.location.street.number;



        // Agregar los datos del usuario a la página HTML
        $('#first-name').text(firstName);
        $('#last-name').text(lastName);
        $('#full-name').text(fullName);
        $('#email').text(email);
        $('#phone').text(phone);
        $('#age').text(age);
        $('#photo').attr('src', photo);

        $('#pdFirstName').text(pdFirstName);
        $('#pdLastName').text(pdLastName);
        $('#pdEmail').text(pdEmail);
        $('#pdPhone').text(pdPhone);
        $('#pdAge').text(pdAge);
        $('#pdAdress').text(pdAdress);

      },
      get success() {
        return this._success;
      },
      set success(value) {
        this._success = value;
      },
    });
  });