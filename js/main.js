alert('hi');

var itemTemplate = $('#templates .item').html();
var newItemHtml = Robin.render(itemTemplate, {name: 'Dewberry', price: 0.15});
$('#store').append(newItemHtml);

var items=[
{name: 'Orange', price: 0.90},
{name: 'Carrots', price: 1},
{name: 'Pear', price: 0.95}
];

items.forEach(function(item){
  var x = item.name;
  var y = item.price;
  var newItems = Robin.render(itemTemplate, {name: item.name, price: item.price});
$('#store').append(newItems);
});

