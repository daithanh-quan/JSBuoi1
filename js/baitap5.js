/**
 * Khối 1: input
 * số có 2 chữ số
 *
 *
 * Khối 2:
 * B1: tạo và gán giá trị cho số có 2 chữ số, số lấy hàng chục , số lấy hàng đơn vị, tổng
 * number = 56
 * dozenNumber = 0 // số hàng chục
 * unitNumber = 0  // số hàng đơn vị
 * sum = 0 // tổng
 * B2: lấy số hàng chục và số hàng đơn vị
 * dozenNumber = number % 10
 * unitNumber = Math.floor(number / 10)
 * B3: tính tổng
 * sum = dozenNumber + unitNumer
 *
 * Khối 3:output
 * tính tổng 2 ký số vừa nhập
 *
 */

// tạo và gán giá trị
var number = 56
var dozenNumber = 0
var unitNumber = 0
var sum = 0
// tính số hàng chục và đơn vị
dozenNumber = Math.floor(number / 10)
unitNumber = number % 10
// tính tổng
sum = dozenNumber + unitNumber
console.log(sum)
