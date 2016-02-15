$(document).ready(function() {
  $('.sum').on('click', add);
  $('.diff').on('click', subtract);
  $('.product').on('click', multiply);
  $('.quotient').on('click', divide);
  $('.clear').on('click', clearResult)
});

function add() {
  event.preventDefault();
  var values = {};
  $.each($('#first-input-form').serializeArray(), function(i, field) {
    values[field.name] = field.value;
  });

  $('#first-input-form').find('input[type=text]').val('');

  $.each($('#second-input-form').serializeArray(), function(i, field) {
    values[field.name] = field.value;
    values.type = 'add';

  });

  $('#second-input-form').find('input[type=text]').val('');

  console.log(values);

  $.ajax({
    type: 'POST',
    url: '/add',
    data: values,
    beforeSend: function() {
      console.log('before!');
    },
    success: function(data) {
      console.log('From Server: ', data);
      console.log(data);

      $('.result').children().last().replaceWith('<p>' + data + '</p>');
    }
  });
}

function subtract() {
  event.preventDefault();
  var values = {};
  $.each($('#first-input-form').serializeArray(), function (i, field) {
    values[field.name] = field.value;
  });

  $('#first-input-form').find('input[type=text]').val('');

  $.each($('#second-input-form').serializeArray(), function (i, field) {
    values[field.name] = field.value;
    values.type = 'subtract';

  });

  $('#second-input-form').find('input[type=text]').val('');

  console.log(values);

  $.ajax({
    type: 'POST',
    url: '/subtract',
    data: values,
    beforeSend: function () {
      console.log('before!');
    },
    success: function (data) {
      console.log('From Server: ', data);
      console.log(data);

      $('.result').children().last().replaceWith('<p>' + data + '</p>');
    }
  });
}

function multiply() {
  event.preventDefault();
  var values = {};
  $.each($('#first-input-form').serializeArray(), function(i, field) {
    values[field.name] = field.value;
  });

  $('#first-input-form').find('input[type=text]').val('');

  $.each($('#second-input-form').serializeArray(), function(i, field) {
    values[field.name] = field.value;
    values.type = 'multiply';

  });

  $('#second-input-form').find('input[type=text]').val('');

  console.log(values);

  $.ajax({
    type: 'POST',
    url: '/multiply',
    data: values,
    beforeSend: function() {
      console.log('before!');
    },
    success: function(data) {
      console.log('From Server: ', data);
      console.log(data);

      $('.result').children().last().replaceWith('<p>' + data + '</p>');
    }
  });
}

function divide() {
  event.preventDefault();
  var values = {};
  $.each($('#first-input-form').serializeArray(), function(i, field) {
    values[field.name] = field.value;
  });

  $('#first-input-form').find('input[type=text]').val('');

  $.each($('#second-input-form').serializeArray(), function(i, field) {
    values[field.name] = field.value;
    values.type = 'divide';

  });

  $('#second-input-form').find('input[type=text]').val('');

  console.log(values);

  $.ajax({
    type: 'POST',
    url: '/divide',
    data: values,
    beforeSend: function() {
      console.log('before!');
    },
    success: function(data) {
      console.log('From Server: ', data);
      console.log(data);

      $('.result').children().last().replaceWith('<p>' + data + '</p>');
    }
  });
}

function clearResult(){
  $('.result').children().last().replaceWith('<p>' + 0 + '</p>');
}
