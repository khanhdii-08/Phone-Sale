

$(document).ready(function () {
  $('#toggle-on').click(function () {
    $('.nav_mobile').slideToggle();
    $('.overlay-nav').slideToggle();
  })
})
$(document).ready(function () {
  $('#toggle-off').click(function () {
    $('.nav_mobile').slideToggle();
    $('.overlay-nav').slideToggle();
  })
})
$(document).ready(function () {
  $('.overlay-nav').click(function () {
    $('.nav_mobile').slideToggle();
    $('.overlay-nav').slideToggle();
  })
})

var products = document.getElementById("products");

var dataProduct = [{
  id: "item-1",
  url1: "../assets/image/gallery/preview/ip12prm/iphone-12-pro-max-512gb-1-org.jpg",
  url2: "../assets/image/gallery/preview/ip12prm/iphone-12-pro-max-512gb-2-org.jpg",
  url3: "../assets/image/gallery/preview/ip12prm/iphone-12-pro-max-512gb-3-org.jpg",
  url4: "../assets/image/gallery/preview/ip12prm/iphone-12-pro-max-512gb-4-org.jpg",
  name: "iPhone 12 Pro Max - Vàng",
  price: 28600000,
  status: true,
  orderQty: 1,
  tt:"iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.",
  tt1:"Màn hình:OLED6.7 Super Retina XDR Hệ điều hành:iOS 14 Camera sau:3 camera 12 MP Camera trước:12 MP Chip:Apple A14 Bionic RAM:6 GB Bộ nhớ trong:128 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 5G Pin, Sạc:3687 mAh20 WSH"

}, {
  id: "item-2",
  url1: "../assets/image/gallery/preview/ip12prm/iphone-12-pro-max-bac-1-org.jpg",
  url2: "../assets/image/gallery/preview/ip12prm/iphone-12-pro-max-bac-2-org.jpg",
  url3: "../assets/image/gallery/preview/ip12prm/iphone-12-pro-max-bac-3-org.jpg",
  url4: "../assets/image/gallery/preview/ip12prm/iphone-12-pro-max-bac-4-org.jpg",
  name: "iPhone 12 Pro Max - Trắng",
  price: 28600000,
  status: true,
  orderQty: 2,
  tt:"iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.",
  tt1:"Màn hình:OLED6.7 Super Retina XDR Hệ điều hành:iOS 14 Camera sau:3 camera 12 MP Camera trước:12 MP Chip:Apple A14 Bionic RAM:6 GB Bộ nhớ trong:128 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 5G Pin 3687 mAh, Sạc:20 WSH"
}, {
  id: "item-3",
  url1: "../assets/image/gallery/preview/ip12/iphone-12-256gb-1-org.jpg",
  url2: "../assets/image/gallery/preview/ip12/iphone-12-256gb-2-org.jpg",
  url3: "../assets/image/gallery/preview/ip12/iphone-12-256gb-3-org.jpg",
  url4: "../assets/image/gallery/preview/ip12/iphone-12-256gb-4-org.jpg",
  name: "iPhone 12 - Đỏ ",
  price: 19490000,
  status: true,
  orderQty: 3,
  tt:"iPhone 12 256 GB được Apple cho ra mắt đã đem đến làn sóng mạnh mẽ đối với những ai yêu công nghệ nói chung và “fan hâm mộ” trung thành của iPhone nói riêng, với con chip mạnh, dung lượng lưu trữ lớn cùng thiết kế toàn diện và khả năng hiển thị hình ảnh xuất sắc.",
  tt1:"Màn hình:OLED6.1 Super Retina XDR Hệ điều hành:iOS 14 Camera sau:2 camera 12 MP Camera trước:12 MP Chip:Apple A14 Bionic RAM:4 GB Bộ nhớ trong:256 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 5G Pin:2815 mAh, Sạc:20W"
}, {
  id: "item-4",
  url1: "../assets/image/gallery/preview/ip12/iphone-12-256gb-trang-1-org.jpg",
  url2: "../assets/image/gallery/preview/ip12/iphone-12-256gb-trang-2-org.jpg",
  url3: "../assets/image/gallery/preview/ip12/iphone-12-256gb-trang-3-org.jpg",
  url4: "../assets/image/gallery/preview/ip12/iphone-12-256gb-trang-4-org.jpg",
  name: "iPhone 12 - Trắng ",
  price: 19490000,
  status: true,
  orderQty: 1,
  tt:"iPhone 12 256 GB được Apple cho ra mắt đã đem đến làn sóng mạnh mẽ đối với những ai yêu công nghệ nói chung và “fan hâm mộ” trung thành của iPhone nói riêng, với con chip mạnh, dung lượng lưu trữ lớn cùng thiết kế toàn diện và khả năng hiển thị hình ảnh xuất sắc.",
  tt1:"Màn hình:OLED6.1 Super Retina XDR Hệ điều hành:iOS 14 Camera sau:2 camera 12 MP Camera trước:12 MP Chip:Apple A14 Bionic RAM:4 GB Bộ nhớ trong:256 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 5G Pin:2815mAh, Sạc:20W"
}, {
  id: "item-5",
  url1: "../assets/image/gallery/preview/ip11prm/iphone-11-pro-max-vang-1-1-org.jpg",
  url2: "../assets/image/gallery/preview/ip11prm/iphone-11-pro-max-vang-2-1-org.jpg",
  url3: "../assets/image/gallery/preview/ip11prm/iphone-11-pro-max-vang-3-1-org.jpg",
  url4: "../assets/image/gallery/preview/ip11prm/iphone-11-pro-max-vang-4-1-org.jpg",
  name: "iPhone 11 Pro Max - Vàng",
  price: 24190000,
  status: true,
  orderQty: 3,
  tt:"Trong năm 2019 thì chiếc smartphone được nhiều người mong muốn sở hữu trên tay và sử dụng nhất không ai khác chính là iPhone 11 Pro Max 64GB tới từ nhà Apple.",
  tt1:"Màn hình:OLED6.5 Super Retina XDR Hệ điều hành:iOS 14 Camera sau:3 camera 12 MP Camera trước:12 MP Chip:Apple A13 Bionic RAM:4 GB Bộ nhớ trong:64 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 4G Pin 3969 mAh, Sạc:20 W"
}, {
  id: "item-6",
  url1: "../assets/image/gallery/preview/ip11prm/iphone-11-pro-max-xanh-1-1-org.jpg",
  url2: "../assets/image/gallery/preview/ip11prm/iphone-11-pro-max-xanh-2-1-org.jpg",
  url3: "../assets/image/gallery/preview/ip11prm/iphone-11-pro-max-xanh-3-1-org.jpg",
  url4: "../assets/image/gallery/preview/ip11prm/iphone-11-pro-max-xanh-4-1-org.jpg",
  name: "iPhone 11 Pro Max - Xanh ",
  price: 24190000,
  status: true,
  orderQty: 2,
  tt:"Trong năm 2019 thì chiếc smartphone được nhiều người mong muốn sở hữu trên tay và sử dụng nhất không ai khác chính là iPhone 11 Pro Max 64GB tới từ nhà Apple.",
  tt1:"Màn hình:OLED6.5 Super Retina XDR Hệ điều hành:iOS 14 Camera sau:3 camera 12 MP Camera trước:12 MP Chip:Apple A13 Bionic RAM:4 GB Bộ nhớ trong:64 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 4G Pin 3969 mAh, Sạc:20 W"
}, {
  id: "item-7",
  url1: "../assets/image/gallery/preview/ip11/iphone-11-128gb-tim-1-1-org.jpg",
  url2: "../assets/image/gallery/preview/ip11/iphone-11-128gb-tim-2-1-org.jpg",
  url3: "../assets/image/gallery/preview/ip11/iphone-11-128gb-tim-3-1-org.jpg",
  url4: "../assets/image/gallery/preview/ip11/iphone-11-128gb-tim-4-1-org.jpg",
  name: "iPhone 11 - Tím",
  price: 19490000,
  status: true,
  orderQty: 1,
  tt:"Tháng 09/2019, Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó.",
  tt1:"Màn hình:IPS LCD6.1 Liquid Retina Hệ điều hành:iOS 14 Camera sau:2 camera 12 MP Camera trước:12 MP Chip:Apple A13 Bionic RAM:4 GB Bộ nhớ trong:64 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 4G Pin:3110 mAh1, Sạc:18 W"
}, {
  id: "item-8",
  url1: "../assets/image/gallery/preview/ip11/iphone-11-128gb-xanh-la-1-org.jpg",
  url2: "../assets/image/gallery/preview/ip11/iphone-11-128gb-xanh-la-2-org.jpg",
  url3: "../assets/image/gallery/preview/ip11/iphone-11-128gb-xanh-la-3-org.jpg",
  url4: "../assets/image/gallery/preview/ip11/iphone-11-128gb-xanh-la-4-org.jpg",
  name: "iPhone 11 - Xanh",
  price: 19490000,
  status: true,
  orderQty: 3,
  tt:"Tháng 09/2019, Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó.",
  tt1:"Màn hình:IPS LCD6.1 Liquid Retina Hệ điều hành:iOS 14 Camera sau:2 camera 12 MP Camera trước:12 MP Chip:Apple A13 Bionic RAM:4 GB Bộ nhớ trong:64 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 4G Pin:3110 mAh1, Sạc:18 W"
}, {
  id: "item-9",
  url1: "../assets/image/gallery/preview/ipxsm/iphone-xs-max-1-org.jpg",
  url2: "../assets/image/gallery/preview/ipxsm/iphone-xs-max-2-org.jpg",
  url3: "../assets/image/gallery/preview/ipxsm/iphone-xs-max-3-org.jpg",
  url4: "../assets/image/gallery/preview/ipxsm/iphone-xs-max-4-org.jpg",
  name: "iPhone XS Max - vàng",
  price: 18190000,
  status: true,
  orderQty: 1,
  tt:"Hoàn toàn xứng đáng với những gì được mong chờ, phiên bản cao cấp nhất iPhone Xs Max 64 GB của Apple năm nay nổi bật với chip A12 Bionic mạnh mẽ, màn hình rộng đến 6.5 inch, cùng camera kép trí tuệ nhân tạo và Face ID được nâng cấp.",
  tt1:"Màn hình:OLED6.5 Super Retina Hệ điều hành:iOS 14 Camera sau:2 camera 12 MP Camera trước:7 MP Chip:Apple A12 Bionic RAM:4 GB Bộ nhớ trong:64 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 4G Pin:3174 mAh, Sạc:"
}, {
  id: "item-10",
  url1: "../assets/image/gallery/preview/ipxsm/iphone-xs-max-bac-1-1-org.jpg",
  url2: "../assets/image/gallery/preview/ipxsm/iphone-xs-max-bac-2-1-org.jpg",
  url3: "../assets/image/gallery/preview/ipxsm/iphone-xs-max-bac-3-1-org.jpg",
  url4: "../assets/image/gallery/preview/ipxsm/iphone-xs-max-bac-4-1-org.jpg",
  name: "iPhone XS MAX - Trắng",
  price: 18190000,
  status: true,
  orderQty: 2,
  tt:"Hoàn toàn xứng đáng với những gì được mong chờ, phiên bản cao cấp nhất iPhone Xs Max 64 GB của Apple năm nay nổi bật với chip A12 Bionic mạnh mẽ, màn hình rộng đến 6.5 inch, cùng camera kép trí tuệ nhân tạo và Face ID được nâng cấp.",
  tt1:"Màn hình:OLED6.5 Super Retina Hệ điều hành:iOS 14 Camera sau:2 camera 12 MP Camera trước:7 MP Chip:Apple A12 Bionic RAM:4 GB Bộ nhớ trong:64 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 4G Pin:3174 mAh, Sạc:"
}, {
  id: "item-11",
  url1: "../assets/image/gallery/preview/ipx/iphone-x-64gb-bac-1-1-org.jpg",
  url2: "../assets/image/gallery/preview/ipx/iphone-x-64gb-bac-2-1-org.jpg",
  url3: "../assets/image/gallery/preview/ipx/iphone-x-64gb-bac-3-1-org.jpg",
  url4: "../assets/image/gallery/preview/ipx/iphone-x-64gb-bac-4-1-org.jpg",
  name: "iPhone X - Trắng",
  price: 12120000,
  status: true,
  orderQty: 2,
  tt:"iPhone X 64 GB là cụm từ được rất nhiều người mong chờ muốn biết và tìm kiếm trên Google bởi đây là chiếc điện thoại mà Apple kỉ niệm 10 năm iPhone đầu tiên được bán ra.",
  tt1:"Màn hình:OLED5.8 Super Retina Hệ điều hành:iOS 12 Camera sau:2 camera 12 MP Camera trước:7 MP Chip:Apple A11 Bionic RAM:3 GB Bộ nhớ trong:64 GB SIM:1 Nano SIM Pin:2716 mAh, Sạc:"
}, {
  id: "item-12",
  url1: "../assets/image/gallery/preview/ipx/iphone-x-64gb-mau-den-1-org.jpg",
  url2: "../assets/image/gallery/preview/ipx/iphone-x-64gb-mau-den-12-org.jpg",
  url3: "../assets/image/gallery/preview/ipx/iphone-x-64gb-mau-den-13-org.jpg",
  url4: "../assets/image/gallery/preview/ipx/iphone-x-64gb-mau-den-14-org.jpg",
  name: "iPhone X - Đen",
  price: 12120000,
  status: true,
  orderQty: 1,
  tt:"iPhone X 64 GB là cụm từ được rất nhiều người mong chờ muốn biết và tìm kiếm trên Google bởi đây là chiếc điện thoại mà Apple kỉ niệm 10 năm iPhone đầu tiên được bán ra.",
  tt1:"Màn hình:OLED5.8 Super Retina Hệ điều hành:iOS 12 Camera sau:2 camera 12 MP Camera trước:7 MP Chip:Apple A11 Bionic RAM:3 GB Bộ nhớ trong:64 GB SIM:1 Nano SIM Pin:2716 mAh, Sạc:"

}, {
  id: "item-13",
  url1: "../assets/image/gallery/preview/ip12prm/iphone-12-pro-max-512gb-1-org.jpg",
  url2: "../assets/image/gallery/preview/ip12prm/iphone-12-pro-max-512gb-2-org.jpg",
  url3: "../assets/image/gallery/preview/ip12prm/iphone-12-pro-max-512gb-3-org.jpg",
  url4: "../assets/image/gallery/preview/ip12prm/iphone-12-pro-max-512gb-4-org.jpg",
  name: "iPhone 12 Pro Max - Vàng",
  price: 24190000,
  status: false,
  orderQty: 2,
  tt:"iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.",
  tt1:"Màn hình:OLED6.7 Super Retina XDR Hệ điều hành:iOS 14 Camera sau:3 camera 12 MP Camera trước:12 MP Chip:Apple A14 Bionic RAM:6 GB Bộ nhớ trong:128 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 5G Pin, Sạc:3687 mAh20 WSH"

}, {
  id: "item-14",
  url1: "../assets/image/gallery/preview/ip12prm/iphone-12-pro-max-bac-1-org.jpg",
  url2: "../assets/image/gallery/preview/ip12prm/iphone-12-pro-max-bac-2-org.jpg",
  url3: "../assets/image/gallery/preview/ip12prm/iphone-12-pro-max-bac-3-org.jpg",
  url4: "../assets/image/gallery/preview/ip12prm/iphone-12-pro-max-bac-4-org.jpg",
  name: "iPhone 12 Pro Max - Trắng",
  price: 24190000,
  status: false,
  orderQty: 2,
  tt:"iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.",
  tt1:"Màn hình:OLED6.7 Super Retina XDR Hệ điều hành:iOS 14 Camera sau:3 camera 12 MP Camera trước:12 MP Chip:Apple A14 Bionic RAM:6 GB Bộ nhớ trong:128 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 5G Pin, Sạc:3687 mAh20 WSH"
}, {
  id: "item-15",
  url1: "../assets/image/gallery/preview/ip12/iphone-12-256gb-1-org.jpg",
  url2: "../assets/image/gallery/preview/ip12/iphone-12-256gb-2-org.jpg",
  url3: "../assets/image/gallery/preview/ip12/iphone-12-256gb-3-org.jpg",
  url4: "../assets/image/gallery/preview/ip12/iphone-12-256gb-4-org.jpg",
  name: "iPhone 12 - Đỏ ",
  price: 15290000,
  status: false,
  orderQty: 1,
  tt:"iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.",
  tt1:"Màn hình:OLED6.7 Super Retina XDR Hệ điều hành:iOS 14 Camera sau:3 camera 12 MP Camera trước:12 MP Chip:Apple A14 Bionic RAM:6 GB Bộ nhớ trong:128 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 5G Pin 3687 mAh, Sạc:20 WSH"
}, {
  id: "item-16",
  url1: "../assets/image/gallery/preview/ip12/iphone-12-256gb-trang-1-org.jpg",
  url2: "../assets/image/gallery/preview/ip12/iphone-12-256gb-trang-2-org.jpg",
  url3: "../assets/image/gallery/preview/ip12/iphone-12-256gb-trang-3-org.jpg",
  url4: "../assets/image/gallery/preview/ip12/iphone-12-256gb-trang-4-org.jpg",
  name: "iPhone 12 - Trắng ",
  price: 15290000,
  status: false,
  orderQty: 1,
  tt:"iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.",
  tt1:"Màn hình:OLED6.7 Super Retina XDR Hệ điều hành:iOS 14 Camera sau:3 camera 12 MP Camera trước:12 MP Chip:Apple A14 Bionic RAM:6 GB Bộ nhớ trong:128 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 5G Pin 3687 mAh, Sạc:20 WSH"
}, {
  id: "item-17",
  url1: "../assets/image/gallery/preview/ip11prm/iphone-11-pro-max-vang-1-1-org.jpg",
  url2: "../assets/image/gallery/preview/ip11prm/iphone-11-pro-max-vang-2-1-org.jpg",
  url3: "../assets/image/gallery/preview/ip11prm/iphone-11-pro-max-vang-3-1-org.jpg",
  url4: "../assets/image/gallery/preview/ip11prm/iphone-11-pro-max-vang-4-1-org.jpg",
  name: "iPhone 11 Pro Max - Vàng",
  price: 19790000,
  status: false,
  orderQty: 2,
  tt:"Trong năm 2019 thì chiếc smartphone được nhiều người mong muốn sở hữu trên tay và sử dụng nhất không ai khác chính là iPhone 11 Pro Max 64GB tới từ nhà Apple.",
  tt1:"Màn hình:OLED6.5 Super Retina XDR Hệ điều hành:iOS 14 Camera sau:3 camera 12 MP Camera trước:12 MP Chip:Apple A13 Bionic RAM:4 GB Bộ nhớ trong:64 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 4G Pin 3969 mAh, Sạc:20 W"
}, {
  id: "item-18",
  url1: "../assets/image/gallery/preview/ip11prm/iphone-11-pro-max-xanh-1-1-org.jpg",
  url2: "../assets/image/gallery/preview/ip11prm/iphone-11-pro-max-xanh-2-1-org.jpg",
  url3: "../assets/image/gallery/preview/ip11prm/iphone-11-pro-max-xanh-3-1-org.jpg",
  url4: "../assets/image/gallery/preview/ip11prm/iphone-11-pro-max-xanh-4-1-org.jpg",
  name: "iPhone 11 Pro Max - Xanh ",
  price: 19790000,
  status: false,
  orderQty: 3,
  tt:"Trong năm 2019 thì chiếc smartphone được nhiều người mong muốn sở hữu trên tay và sử dụng nhất không ai khác chính là iPhone 11 Pro Max 64GB tới từ nhà Apple.",
  tt1:"Màn hình:OLED6.5 Super Retina XDR Hệ điều hành:iOS 14 Camera sau:3 camera 12 MP Camera trước:12 MP Chip:Apple A13 Bionic RAM:4 GB Bộ nhớ trong:64 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 4G Pin 3969 mAh, Sạc:20 W"
}, {
  id: "item-19",
  url1: "../assets/image/gallery/preview/ip11/iphone-11-128gb-tim-1-1-org.jpg",
  url2: "../assets/image/gallery/preview/ip11/iphone-11-128gb-tim-2-1-org.jpg",
  url3: "../assets/image/gallery/preview/ip11/iphone-11-128gb-tim-3-1-org.jpg",
  url4: "../assets/image/gallery/preview/ip11/iphone-11-128gb-tim-4-1-org.jpg",
  name: "iPhone 11 - Tím",
  price: 19490000,
  status: false,
  orderQty: 1,
  tt:"Tháng 09/2019, Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó.",
  tt1:"Màn hình:IPS LCD6.1 Liquid Retina Hệ điều hành:iOS 14 Camera sau:2 camera 12 MP Camera trước:12 MP Chip:Apple A13 Bionic RAM:4 GB Bộ nhớ trong:64 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 4G Pin:3110 mAh1, Sạc:18 W"
}, {
  id: "item-20",
  url1: "../assets/image/gallery/preview/ip11/iphone-11-128gb-xanh-la-1-org.jpg",
  url2: "../assets/image/gallery/preview/ip11/iphone-11-128gb-xanh-la-2-org.jpg",
  url3: "../assets/image/gallery/preview/ip11/iphone-11-128gb-xanh-la-3-org.jpg",
  url4: "../assets/image/gallery/preview/ip11/iphone-11-128gb-xanh-la-4-org.jpg",
  name: "iPhone 11 - Xanh",
  price: 13450000,
  status: false,
  orderQty: 3,
  tt:"Tháng 09/2019, Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó.",
  tt1:"Màn hình:IPS LCD6.1 Liquid Retina Hệ điều hành:iOS 14 Camera sau:2 camera 12 MP Camera trước:12 MP Chip:Apple A13 Bionic RAM:4 GB Bộ nhớ trong:64 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 4G Pin:3110 mAh1, Sạc:18 W"
}, {
  id: "item-21",
  url1: "../assets/image/gallery/preview/ipxsm/iphone-xs-max-1-org.jpg",
  url2: "../assets/image/gallery/preview/ipxsm/iphone-xs-max-2-org.jpg",
  url3: "../assets/image/gallery/preview/ipxsm/iphone-xs-max-3-org.jpg",
  url4: "../assets/image/gallery/preview/ipxsm/iphone-xs-max-4-org.jpg",
  name: "iPhone XS Max - vàng",
  price: 13450000,
  status: false,
  tt:"Hoàn toàn xứng đáng với những gì được mong chờ, phiên bản cao cấp nhất iPhone Xs Max 64 GB của Apple năm nay nổi bật với chip A12 Bionic mạnh mẽ, màn hình rộng đến 6.5 inch, cùng camera kép trí tuệ nhân tạo và Face ID được nâng cấp.",
  tt1:"Màn hình:OLED6.5 Super Retina Hệ điều hành:iOS 14 Camera sau:2 camera 12 MP Camera trước:7 MP Chip:Apple A12 Bionic RAM:4 GB Bộ nhớ trong:64 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 4G Pin:3174 mAh, Sạc:"

}, {
  id: "item-22",
  url1: "../assets/image/gallery/preview/ipxsm/iphone-xs-max-bac-1-1-org.jpg",
  url2: "../assets/image/gallery/preview/ipxsm/iphone-xs-max-bac-2-1-org.jpg",
  url3: "../assets/image/gallery/preview/ipxsm/iphone-xs-max-bac-3-1-org.jpg",
  url4: "../assets/image/gallery/preview/ipxsm/iphone-xs-max-bac-4-1-org.jpg",
  name: "iPhone XS MAX - Trắng",
  price: 13450000,
  status: false,
  orderQty: 3,  
  tt:"Hoàn toàn xứng đáng với những gì được mong chờ, phiên bản cao cấp nhất iPhone Xs Max 64 GB của Apple năm nay nổi bật với chip A12 Bionic mạnh mẽ, màn hình rộng đến 6.5 inch, cùng camera kép trí tuệ nhân tạo và Face ID được nâng cấp.",
  tt1:"Màn hình:OLED6.5 Super Retina Hệ điều hành:iOS 14 Camera sau:2 camera 12 MP Camera trước:7 MP Chip:Apple A12 Bionic RAM:4 GB Bộ nhớ trong:64 GB SIM:1 Nano SIM & 1 eSIMHỗ trợ 4G Pin:3174 mAh, Sạc:"
}, {
  id: "item-23",
  url1: "../assets/image/gallery/preview/ipx/iphone-x-64gb-bac-1-1-org.jpg",
  url2: "../assets/image/gallery/preview/ipx/iphone-x-64gb-bac-2-1-org.jpg",
  url3: "../assets/image/gallery/preview/ipx/iphone-x-64gb-bac-3-1-org.jpg",
  url4: "../assets/image/gallery/preview/ipx/iphone-x-64gb-bac-4-1-org.jpg",
  name: "iPhone X - Trắng",
  price: 89990000,
  status: false,
  orderQty: 2,
  tt:"iPhone X 64 GB là cụm từ được rất nhiều người mong chờ muốn biết và tìm kiếm trên Google bởi đây là chiếc điện thoại mà Apple kỉ niệm 10 năm iPhone đầu tiên được bán ra.",
  tt1:"Màn hình:OLED5.8 Super Retina Hệ điều hành:iOS 12 Camera sau:2 camera 12 MP Camera trước:7 MP Chip:Apple A11 Bionic RAM:3 GB Bộ nhớ trong:64 GB SIM:1 Nano SIM Pin:2716 mAh, Sạc:"
}, {
  id: "item-24",
  url1: "../assets/image/gallery/preview/ipx/iphone-x-64gb-mau-den-1-org.jpg",
  url2: "../assets/image/gallery/preview/ipx/iphone-x-64gb-mau-den-12-org.jpg",
  url3: "../assets/image/gallery/preview/ipx/iphone-x-64gb-mau-den-13-org.jpg",
  url4: "../assets/image/gallery/preview/ipx/iphone-x-64gb-mau-den-14-org.jpg",
  name: "iPhone X - Đen",
  price: 89990000,
  status: false,
  orderQty: 1,
  tt:"iPhone X 64 GB là cụm từ được rất nhiều người mong chờ muốn biết và tìm kiếm trên Google bởi đây là chiếc điện thoại mà Apple kỉ niệm 10 năm iPhone đầu tiên được bán ra.",
  tt1:"Màn hình:OLED5.8 Super Retina Hệ điều hành:iOS 12 Camera sau:2 camera 12 MP Camera trước:7 MP Chip:Apple A11 Bionic RAM:3 GB Bộ nhớ trong:64 GB SIM:1 Nano SIM Pin:2716 mAh, Sạc:"
}

]
// 1 mảng chứa các sản phẩm mà user đã thêm vào giỏ hàng

danhsachGioHang = [{ id: "item-1", n: 3 },
{ id: "item-2", n: 1 },
{ id: "item-6", n: 2 }];

var users = [{
  name: "Admin",
  username: "admin",
  password: "admin",
  product_user: danhsachGioHang
}]

// var listUser = [users];

// chuyển listUser sang string kiểu JSON
// localStorage.setItem('listUser', JSON.stringify(listUser));
// var register = function(){
//     // lấy dữ liệu từ form
//     // mỗi thằng input trong form nó sẽ có cái attribute name
//     // username thì có name là usename
//     // <input type="text" name ="username";
//     var form = document.getElementById('form');
//     var dataForm = Object.fromEntries(new FormData(form).entries());
//     // dataForm.username nó sẽ lấy value mà mình nhập vào từ input
//     //  ví dụ là đã lấy hết dữ liệu r
//     var newUser = {
//       username : dataForm.username,
//       password : dataForm.password,
//       cart: []
//     }
//     // thêm vào listusser
//     listUser.push(newUser);
//     localStorage.setItem('listUser', JSON.stringify(listUser));
// }
// console.log(a);
function saveListUser() {
  var list = JSON.parse(localStorage.getItem("listUser"));
  if (list)
    users = list;
}
saveListUser();

function logout() {
  localStorage.removeItem('user_login');
}
function myFunction() {
  var element = document.getElementById("menu_login_user");
  element.classList.add("memulogin");
}
function checkLogin() {
  var user = JSON.parse(localStorage.getItem("user_login"));
  var names = document.getElementsByClassName("user-name");
  var btnlogout = document.getElementById("btn-login");
  var btnLoginpc = document.getElementById("btn-login_pc");
  var btnLoginmobile = document.getElementById("btn-login_mobile");
  var demcart = document.getElementById("demcart");
  var btnlogoutacc = document.getElementById("btn_logout_acc");
  var totalProduct = document.querySelector(".totalProduct");
  if (user) {
    for (var i of names) {
      i.innerHTML = user.name;
    }
    totalProduct.innerText = user.product_user.length;
    logout.innerText = "Đăng Xuất";
    demcart.style.display = "block";
    myFunction();
    btnLoginpc.addEventListener('click', function (event) {
      event.preventDefault();
    })
    btnLoginmobile.addEventListener('click', function (event) {
      event.preventDefault();
    })
    btnlogout.addEventListener('click', function (event) {
      event.preventDefault();
      logout();
      window.location = "./index.html";
    })
    btnlogoutacc.addEventListener('click', function (event) {
      event.preventDefault();
      logout();
      window.location = "../index.html";
    })
    return user;
  }
  return "";
}

var bool = Boolean(checkLogin());
var userNow = checkLogin();
console.log(bool);
console.log(checkLogin());

// cart
// if có user thì thêm, xem giỏ hàng đc


// dataProduct.push(item);


function pushDataAll() {
  for (var data of dataProduct) {
    var product = `<div id="${data.id}" class="card product col col-6 col-md-4 col-lg-3 col-xl-2 p-0">
    <div class="">
      <img src="${data.url1}" class="card-img-top card-img" alt="...">
      <div class="card-body">
        <h6 class="card-title">${data.name} </h6>
        <p class="card-text">${data.price} vnđ</p>
        <a href="#" class="btn btn-cart btn-primary"><i class="fas fa-cart-plus"></i></i> <span>Chi Tiết</span> </a>
      </div>
    </div>
  </div>`;
    products.innerHTML += product;
  }
}

function pushDataHome(dataProduct, products) {
  for (var data of dataProduct) {
    var product = `<div id="${data.id}" class="card product col col-6 col-md-4 col-lg-3 col-xl-2 p-0">
        <div class="">
          <img src="${data.url1.slice(1, data.url1.length)}" class="card-img-top card-img" alt="...">
          <div class="card-body">
            <h6 class="card-title">${data.name} </h6>
            <p class="card-text">${data.price}</p>
            <a href="#" class="btn btn-primary"><i class="fas fa-cart-plus"></i></i> <span>Chi Tiết</span> </a>
          </div>
        </div>
      </div>`;
    products.innerHTML += product;
  }
}

function pushData(dataProduct, products) {
  for (var data of dataProduct) {
    var product = `<div id="${data.id}" class="card product col col-6 col-md-4 col-lg-3 col-xl-2 p-0">
        <div class="">
          <img src="${data.url1}" class="card-img-top card-img" alt="...">
          <div class="card-body">
            <h6 class="card-title">${data.name} </h6>
            <p class="card-text">${data.price}</p>
            <a href="#" class="btn btn-primary"><i class="fas fa-cart-plus"></i></i> <span>Chi Tiết</span> </a>
          </div>
        </div>
      </div>`;
    products.innerHTML += product;
  }
}

function checknew(value) {
  return value == true;
}
function checkold(value) {
  return value == false;
}
var getProductNew = function () {
  return dataProduct.filter(function (value) {
    return checknew(value.status);
  });
}

console.log(getProductNew());
var getProductOld = function () {
  return dataProduct.filter(function (value) {
    return checkold(value.status);
  });
}

// var searchProducts = (data, keyword) => {
//   if (keyword !== null || keyword !== undefined) {
//       var kw = String(keyword);
//       return data.toUpperCase().includes(kw.toUpperCase());
//     }
//     return undefined;
//   }

  var searchProducts = (data, keyword) => {
    if (keyword !== null || keyword !== undefined) {
      var kw = String(keyword);
      return data.filter(function (value) {
        var str = String(value.name);
        return str.toUpperCase().includes(kw.toUpperCase());
      });
    }
    return undefined;
  }

// var dataPro = dataProduct.filter(function(product){
//     return product.name;
// });
var btnSearch=document.getElementById("btn-search");
btnSearch.addEventListener("click", function(e){
  e.preventDefault();
  var search=document.getElementById("search").value; 
  var dataSearch = searchProducts(dataProduct, search);
  localStorage.setItem("filter", 4);
  localStorage.setItem('searchProducts',JSON.stringify(dataSearch));
  window.location="../pages/products.html"
});

var btnProduct =document.getElementById("idproduct");
  btnProduct.addEventListener('click', function (event) {
  event.preventDefault();
  localStorage.setItem('filter',1);
  window.location="../pages/products.html";
})

var pushProducts = function (id) {
  var pro =document.getElementById("products"); 
  if (id == '1') {
    pushDataAll();
  } else if (id == '2') {
    pushData(getProductNew(),pro);
  } else if (id == '3') {
    pushData(getProductOld(),pro);
  }
  else if(id=='4'){
    var data =JSON.parse(localStorage.getItem("searchProducts"));
    console.log(data);
    pushData(data,pro);
  }
}


// chi tiết sản phảm
var getProduct = function (id) {
  var product = dataProduct.find(function (p) {
    return p.id == id;
  })
  return product;
}

var i = 0;
// thêm sản phẩm
function addRow(product, index) {
  var table = document.getElementById("datarow");
  var row = `
    <tr>
        <td class="text-center" >${++i}</td>
        <td class="text-center" >
            <img src="${product.url1}" class="img-product">
        </td>
        <td class="text-center" >${product.name}</td>
        <td class="text-center">${product.price}</td>
        <td class="text-center d-flex justify-content-center">
            <input style="width: 45px; border: none; outline: none;" type="number" 
            class="d-block" name="number" id="number" value="${product.orderQty}" onchange ="totalPrice();" min="1">
        </td>
        <td class="text-center">${product.price * product.orderQty}"</td>
        <td class="text-center">
            <a href="#!" id="${product.id}" class="btn btn-danger btn-delete-sanpham">
            <i class="fas fa-times"></i>
            </a>
        </td>
    </tr>
`;
  var newRow = table.insertRow(table.length);
  newRow.innerHTML = row;
}

//ktr login click võ hàng

function userCartList(user) {
  var productss = [];
  if (user) {
    var danhsachGioHang = user.product_user;
    for (var item of danhsachGioHang) {
      var product = dataProduct.find(function (value) {
        return value.id == item.id;
      });
      product.orderQty = item.n;
      productss.push(product)
    }
  }
  return productss;
}

var addProduct = function (productss) {
  var prd = productss(checkLogin());
  if (prd) {
    for (var product of prd) {
      addRow(product);
    }
    totalPrice();
    return true;
  }
  return false;
}

var removeByAttr = function (arr, attr, value) {
  var i = arr.length;
  while (i--) {
    if (arr[i] && arr[i].hasOwnProperty(attr) && (arguments.length > 2 && arr[i][attr] === value)) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

function deleteItemInCart(product_User) {
  removeByAttr(userNow.product_user, "id", product_User);
  var user_login = userNow;
  localStorage.setItem("user_login", JSON.stringify(user_login));
}
// khi thay đổi số lượng sản phẩm
function whenChageQty() {
  var numbers = document.querySelectorAll("#datarow #number");
  var products = userNow.product_user;
  for (var number in numbers) {
    if (numbers.hasOwnProperty(number)) {
      products[number].n = numbers[number].value;
      // console.log(numbers[number].value);
    }
  }
  var user_login = userNow;
  localStorage.setItem("user_login", JSON.stringify(user_login));
}

// tổng giá 
var totalPrice = function () {
  var table = document.getElementById("datarow");
  var deletes = document.querySelectorAll(".btn-delete-sanpham");
  var totalPr = 0;
  for (var i = 0; i < table.rows.length; ++i) {
    var quantity = table.rows[i].cells[4].querySelector("input").value;
    var price = table.rows[i].cells[3].innerText;
    var total = quantity * price;
    table.rows[i].cells[5].innerText = total;
    totalPr += total;
    deletes[i].onclick = () => {
      table.deleteRow(--i);
      totalPrice();
      deleteItemInCart(deletes[i].id);
    }
  }
  document.getElementById("totalPrice").innerText = totalPr;
  return totalPr;
}
// totalPrice();

var getThongTin = function (user) {
  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;
}
var pay = function () {
  // lấy sản phẩm từ user ra
  var list = document.getElementById("listProductPay");
  var product = userCartList(userNow);
  var total = 0;
  for (var p of product) {
    var item = `
      <li class="list-group-item d-flex justify-content-between ">
          <div>
              <h4 class="my-0">${p.name}</h4>
              <small class="text-muted">${p.price} x ${p.orderQty} </small>
          </div>
          <span class="text-muted">${p.orderQty}</span>
      </li>
      `;
    list.innerHTML += item;
    total += p.price * p.orderQty;
  }
  var totalPrice = `
      <li class="list-group-item d-flex justify-content-between">
          <span>Tổng thành tiền</span>
          <strong id="thanhTien">${total}</strong>
      </li>
  `;
  list.innerHTML += totalPrice;
}

