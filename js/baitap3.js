/**
 * Khối 1: input
 * giá USD : 23.500đ
 *
 * Khối 2:
 * B1: tạo và gán giá trị cho tiền mỹ, và giá trị quy đổi từ mỹ sang việt
 * usMoney = 2
 * valueChangeMoney = 23500
 * vnMoney
 * B2: tính số tiền quy đổi được từ mỹ sang việt nam
 * vnMoney = usMoney * validMoney
 *
 *
 * Khối3: output
 * tính và xuất ra số tiền sau quy đổi
 */

// tạo và gán giá trị
var usMoney = 4
var valueChangeMoney = 23500
var vnMoney = 0
//  tính tiền quy đổi
vnMoney = usMoney * valueChangeMoney
console.log(vnMoney.toLocaleString())
