const mongoose = require('mongoose');
const connectDB = require('../src/config/db');
const Problem = require('../src/models/Problem');

(async () => {
  await connectDB(process.env.MONGO_URI || 'mongodb+srv://lequocnhat43_db_user:nhat200621@cluster0.0hgziws.mongodb.net/logic-training?retryWrites=true&w=majority');
  await Problem.deleteMany({});

  await Problem.create([
    {
title: 'Find the difference',
description: 'Which of the following letters: A, E, I, O, U, Y does not belong to the group?',
options: {
A: 'A',
B: 'I',
C: 'Y',
D: 'O'
},
answer: 'C'
},
{
title: 'Mysterious number',
description: 'I am an even number, greater than 9 but less than 13. Which number am I?',
options: {
A: '8',
B: '10',
C: '11',
D: '12'
},
answer: 'B'
},
{
title: 'Who runs faster?',
description: 'A rabbit runs faster than a turtle, a turtle runs faster than a snail. Which one is the slowest?',
options: {
A: 'Rabbit',
B: 'Tortoise',
C: 'Snail',
D: 'All three are equal'
},
answer: 'C'
},
{
title: 'Find the next number',
description: '1, 1, 2, 3, 5, 8, ?. What is the next number?',
options: {
A: '11',
B: '12',
C: '13',
D: '14'
},
answer: 'C'
},
{
title: 'Divide the cake',
description: 'A cake is divided among 8 people, each person has a piece. How many times do you need to cut?',
options: {
A: '3',
B: '4',
C: '7',
D: '8'
},
answer: 'A'
},
{
title: 'What goes without legs?',
description: 'What goes around the world without legs?',
options: {
A: 'Sound',
B: 'Light',
C: 'Image',
D: 'News'
},
answer: 'D'
},
{
title: 'Balance the scale',
description: 'A scale has two equal sides. One side has 2kg of apples, the other side has 1kg of apples and 1kg of oranges. Which is heavier?',
options: {
A: 'The apple is heavier',
B: 'The orange is heavier',
C: 'Equal',
D: 'Cannot be determined'
},
answer: 'C'
},
{
title: 'Stranger',
description: 'A man walks into a cafe and orders a drink. The waiter takes out a gun and shoots into the air. The man says “Thank you” and leaves. Why?',
options: {
A: 'He choked',
B: 'He hiccupped',
C: 'He was mute',
D: 'He was afraid of gunfire'
},
answer: 'B'
},
{
title: 'Light bulb',
description: 'There are 3 switches on the 1st floor and 1 light bulb on the 2nd floor. You can only go to the 2nd floor once. How do you know which switch turns on the light?',
options: {
A: 'Turn on each switch one by one and then run up',
B: 'Turn on one switch for a while and then turn it off, then turn on another switch',
C: 'Ask someone else to check',
D: 'Impossible to know'
},
answer: 'B'
},
{
title: 'Who has the most money?',
description: 'An has 5 coins, Binh has twice as much as An, Cuong has 3 coins less than Binh. Who has the most money?',
options: {
A: 'An',
B: 'Binh',
C: 'Cuong',
D: 'An and C are equal'
},
answer: 'B'
},

{
title: 'Smart candy sharing',
description: 'There are 9 candies, divide them equally among 3 children. How many balls does each person get?',
options: {
A: '2',
B: '3',
C: '4',
D: '5'
},
answer: 'B'
},

{
title: 'Change places',
description: 'Three people line up: An before Binh, Cuong after Binh. Who is in the middle?',
options: {
A: 'An',
B: 'Binh',
C: 'Cuong',
D: 'Unknown'
},
answer: 'B'
},

{
title: 'Which number is a square?',
description: 'Among the numbers: 16, 18, 20, 22. Which number is a perfect square?',
options: {
A: '16',
B: '18',
C: '20',
D: '22'
},
answer: 'A'
},

{
title: 'Who is telling the truth?',
description: 'An: "I did not break the window." Binh: "An is lying." Cuong: "Binh is telling the truth." One person is telling the truth, two are lying. Who is telling the truth?',
options: {
A: 'An',
B: 'Binh',
C: 'Cuong',
D: 'Unknown'
},
answer: 'B'
},

{
title: 'Give a gift to a friend',
description: 'A mother has 12 oranges and gives them equally to her 3 children. How many oranges does each person get?',
options: {
A: '3',
B: '4',
C: '5',
D: '6'
},
answer: 'B'
},

{
title: 'Walking and running',
description: 'A walks 4 km in 1 hour; B runs 8 km in 40 minutes. Who goes faster (greater speed)?',
options: {
A: 'A',
B: 'B',
C: 'Equal',
D: 'Unknown'
},
answer: 'B'
},

{
title: 'The only odd number',
description: 'In the sequence: 2, 4, 6, 9, 8. Which number is the only odd number?',
options: {
A: '2',
B: '6',
C: '9',
D: '8'
},
answer: 'C'
},

{
title: 'Pairing',
description: 'You have the letters: M, A, T, H. Combine them into meaningful words in English?',
options: {
A: 'MATH',
B: 'HAMT',
C: 'TMAH',
D: 'AMHT'
},
answer: 'A'
},

{
title: 'Divisible by 6',
description: 'Of the numbers: 21, 22, 24, 25 — which number is divisible by 6?',
options: {
A: '21',
B: '22',
C: '24',
D: '25'
},
answer: 'C'
},
{
title: 'Who is the tallest?',
description: 'Three people: A(170cm), B(175cm), C(180cm). Who is the tallest?',
options: {
A: 'A is the tallest',
B: 'B is the tallest',
C: 'C is the tallest',
D: 'All are equal'
},
answer: 'C'
},
{
title: 'Set divided by 2',
description: 'Divide the numbers 1..8 into two groups so that the sum of each group is equal.',
options: {
A: '{1,8,3,4} and {2,5,6,7}',
B: '{1,2,3,8} and {4,5,6,7}',
C: '{1,2,3,4} and {5,6,7,8}',
D: 'Cannot be divided equally'
},
answer: 'B'
},
{
title: 'Who is the oldest?',
description: 'Three people: An (20 years old), Binh (25 age), Cuong (22 years old). Who is the oldest?',
options: {
A: 'An',
B: 'Binh',
C: 'Cuong',
D: 'No one'
},
answer: 'B'
},

{
title: 'Which number is different?',
description: 'The numbers: 2, 4, 6, 9. Which number is odd?',
options: {
A: '2',
B: '4',
C: '6',
D: '9'
},
answer: 'D'
},

{
title: 'Who goes fastest?',
description: 'A goes 2km in 20 minutes, B goes 3km in 30 minutes, C goes 1km in 10 minutes.',
options: {
A: 'A',
B: 'B',
C: 'C',
D: 'B and C are equal'
},
answer: 'C'
},

{
title: 'Divide the set equally',
description: 'Divide the numbers 1..6 into two groups so that the sum is equal.',
options: {
A: '{1,6,2} and {3,4,5}',
B: '{1,2,3} and {4,5,6}',
C: '{1,5,4} and {2,3,6}',
D: 'Cannot be divided equally'
},
answer: 'C'
},

{
title: 'What is the next number?',
description: 'Number sequence: 1, 2, 4, 8, 16, ...',
options: {
A: '18',
B: '20',
C: '32',
D: '24'
},
answer: 'C'
},

{
title: 'Who drinks the water last?',
description: 'There are 3 people drinking water in order from smallest to largest. Binh is bigger than An, Cuong is smaller than Binh.',
options: {
A: 'An',
B: 'Binh',
C: 'Cuong',
D: 'Unknown'
},
answer: 'B'
},

{
title: 'Which numbers are different?',
description: 'The numbers: 11, 13, 15, 17 (which number is not prime?)',
options: {
A: '11',
B: '13',
C: '15',
D: '17'
},
answer: 'C'
},

{
title: 'Who finishes first?',
description: 'A runs 100m in 10 seconds, B runs 200m in 20 seconds, C runs 50m in 6 seconds.',
options: {
A: 'A',
B: 'B',
C: 'C',
D: 'A and B are equal'
},
answer: 'A'
},

{
title: 'Which apple is the heaviest?',
description: 'The red apple weighs 150g, the green apple weighs 180g, the yellow apple weighs 170g.',
options: {
A: 'Red apple',
B: 'Green apple',
C: 'Yellow apple',
D: 'All are equal'
},
answer: 'B'
},
        {
      title: 'Ai là người cao nhất?',
      description: 'Ba người: A(170cm), B(175cm), C(180cm). Ai cao nhất?',
      options: {
        A: 'A cao nhất',
        B: 'B cao nhất',
        C: 'C cao nhất',
        D: 'Tất cả bằng nhau'
      },
      answer: 'C'
    },
    {
      title: 'Tập hợp chia 2',
      description: 'Chia các số 1..8 thành hai nhóm sao cho tổng mỗi nhóm bằng nhau.',
      options: {
        A: '{1,8,3,4} và {2,5,6,7}',
        B: '{1,2,3,8} và {4,5,6,7}',
        C: '{1,2,3,4} và {5,6,7,8}',
        D: 'Không thể chia đều được'
      },
      answer: 'B'
    },
    {
  title: 'Ai là người lớn tuổi nhất?',
  description: 'Ba người: An (20 tuổi), Bình (25 tuổi), Cường (22 tuổi). Ai lớn tuổi nhất?',
  options: {
    A: 'An',
    B: 'Bình',
    C: 'Cường',
    D: 'Không ai'
  },
  answer: 'B'
},

{
  title: 'Số nào khác loại?',
  description: 'Các số: 2, 4, 6, 9. Số nào lẻ?',
  options: {
    A: '2',
    B: '4',
    C: '6',
    D: '9'
  },
  answer: 'D'
},

{
  title: 'Ai đi nhanh nhất?',
  description: 'A đi 2km trong 20 phút, B đi 3km trong 30 phút, C đi 1km trong 10 phút.',
  options: {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'B và C bằng nhau'
  },
  answer: 'C'
},

{
  title: 'Chia tập hợp bằng nhau',
  description: 'Chia các số 1..6 thành hai nhóm sao cho tổng bằng nhau.',
  options: {
    A: '{1,6,2} và {3,4,5}',
    B: '{1,2,3} và {4,5,6}',
    C: '{1,5,4} và {2,3,6}',
    D: 'Không thể chia đều'
  },
  answer: 'C'
},

{
  title: 'Ai nói dối?',
  description: 'An nói: "Tôi không lấy bánh." Bình nói: "An lấy." Cường nói: "Bình nói dối." Một người nói thật. Ai lấy bánh?',
  options: {
    A: 'An',
    B: 'Bình',
    C: 'Cường',
    D: 'Không ai'
  },
  answer: 'A'
},

{
  title: 'Số tiếp theo là gì?',
  description: 'Dãy số: 1, 2, 4, 8, 16, ...',
  options: {
    A: '18',
    B: '20',
    C: '32',
    D: '24'
  },
  answer: 'C'
},

{
  title: 'Ai uống nước cuối cùng?',
  description: 'Có 3 người uống nước theo thứ tự từ nhỏ đến lớn. Bình lớn hơn An, Cường nhỏ hơn Bình.',
  options: {
    A: 'An',
    B: 'Bình',
    C: 'Cường',
    D: 'Không xác định'
  },
  answer: 'B'
},

{
  title: 'Số nào khác loại?',
  description: 'Các số: 11, 13, 15, 17 (số nào không phải số nguyên tố?)',
  options: {
    A: '11',
    B: '13',
    C: '15',
    D: '17'
  },
  answer: 'C'
},

{
  title: 'Ai về đích trước?',
  description: 'A chạy 100m trong 10 giây, B chạy 200m trong 20 giây, C chạy 50m trong 6 giây.',
  options: {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'A và B bằng nhau'
  },
  answer: 'A'
},

{
  title: 'Quả táo nào nặng nhất?',
  description: 'Táo đỏ nặng 150g, táo xanh nặng 180g, táo vàng nặng 170g.',
  options: {
    A: 'Táo đỏ',
    B: 'Táo xanh',
    C: 'Táo vàng',
    D: 'Tất cả bằng nhau'
  },
  answer: 'B'
},
{
  title: 'Ai là người nhỏ tuổi nhất?',
  description: 'Ba người: An (12 tuổi), Bình (9 tuổi), Cường (15 tuổi). Ai nhỏ tuổi nhất?',
  options: {
    A: 'An',
    B: 'Bình',
    C: 'Cường',
    D: 'Không ai'
  },
  answer: 'B'
},

{
  title: 'Chia tập hợp thành hai nhóm bằng nhau',
  description: 'Chia các số 1..8 thành hai nhóm sao cho tổng mỗi nhóm bằng 18.',
  options: {
    A: '{1,4,6,7} và {2,3,5,8}',
    B: '{1,2,3,8} và {4,5,6,7}',
    C: '{1,5,4,8} và {2,3,6,7}',
    D: 'Không thể chia đều'
  },
  answer: 'A'
},

{
  title: 'Ai lấy bánh quy?',
  description: 'An nói: "Tôi không lấy bánh." Bình nói: "An lấy bánh." Cường nói: "Bình nói dối." Chỉ có đúng một người nói thật. Ai lấy bánh?',
  options: {
    A: 'An',
    B: 'Bình',
    C: 'Cường',
    D: 'Không ai'
  },
  answer: 'A'
},

{
  title: 'Số tiếp theo trong dãy',
  description: 'Dãy số: 2, 5, 10, 17, 26, ... Số tiếp theo là?',
  options: {
    A: '30',
    B: '34',
    C: '37',
    D: '40'
  },
  answer: 'C'
},

{
  title: 'Chia kẹo theo tỷ lệ',
  description: 'A có gấp đôi B. C có nhiều hơn B 5 cái. Tổng cả 3 là 41 kẹo. Hỏi B có bao nhiêu kẹo?',
  options: {
    A: '8',
    B: '9',
    C: '10',
    D: '11'
  },
  answer: 'B'
},

{
  title: 'Ai cao nhất?',
  description: 'Quan sát: A cao hơn B, B cao hơn C, C cao hơn D, D cao hơn E. Người cao nhất là ai?',
  options: {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'E'
  },
  answer: 'A'
},

{
  title: 'Số nào khác loại?',
  description: 'Các số: 3, 7, 11, 14. Số nào khác loại (không phải số lẻ)?',
  options: {
    A: '3',
    B: '7',
    C: '11',
    D: '14'
  },
  answer: 'D'
},

{
  title: 'Số trung vị là bao nhiêu?',
  description: 'Cho ba số: 5, 2, 9. Số trung vị (giữa) là gì?',
  options: {
    A: '2',
    B: '5',
    C: '9',
    D: 'Không xác định'
  },
  answer: 'B'
},

{
  title: 'Số tiếp theo của Fibonacci',
  description: 'Dãy: 1, 1, 2, 3, 5, ... Số tiếp theo là?',
  options: {
    A: '6',
    B: '7',
    C: '8',
    D: '10'
  },
  answer: 'C'
},

{
  title: 'Ai giàu nhất?',
  description: 'A có 10 đô, B có gấp đôi A, C có ít hơn B 5 đô. Ai giàu nhất?',
  options: {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'A và C bằng nhau'
  },
  answer: 'B'
},
{
  title: 'Con vật nào không biết bay?',
  description: 'Chọn con vật không thể bay.',
  options: {
    A: 'Chim sẻ',
    B: 'Dơi',
    C: 'Gà',
    D: 'Chim ưng'
  },
  answer: 'C'
},

{
  title: 'Ai nặng nhất?',
  description: 'An nặng 50kg, Bình nhẹ hơn An 5kg, Cường nặng hơn Bình 10kg.',
  options: {
    A: 'An',
    B: 'Bình',
    C: 'Cường',
    D: 'Không ai'
  },
  answer: 'C'
},

{
  title: 'Số nào là số chẵn?',
  description: 'Chọn số chẵn.',
  options: {
    A: '13',
    B: '17',
    C: '20',
    D: '19'
  },
  answer: 'C'
},

{
  title: 'Ngày nào đến sau?',
  description: 'Thứ Hai, Thứ Tư, Thứ Ba, Thứ Sáu. Ngày nào đến sau cùng?',
  options: {
    A: 'Thứ Hai',
    B: 'Thứ Tư',
    C: 'Thứ Ba',
    D: 'Thứ Sáu'
  },
  answer: 'D'
},

{
  title: 'Số nào lớn nhất?',
  description: 'So sánh các số: 9, 15, 12, 7.',
  options: {
    A: '9',
    B: '15',
    C: '12',
    D: '7'
  },
  answer: 'B'
},

{
  title: 'Ai đi nhanh nhất?',
  description: 'A đi 5km trong 1 giờ, B đi 8km trong 2 giờ, C đi 3km trong 20 phút.',
  options: {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'A và C bằng nhau'
  },
  answer: 'C'
},

{
  title: 'Hình nào có nhiều cạnh nhất?',
  description: 'Chọn hình có số cạnh nhiều nhất.',
  options: {
    A: 'Tam giác',
    B: 'Tứ giác',
    C: 'Ngũ giác',
    D: 'Lục giác'
  },
  answer: 'D'
},

{
  title: 'Số tiếp theo là gì?',
  description: 'Dãy số: 10, 20, 30, 40, ...',
  options: {
    A: '45',
    B: '50',
    C: '55',
    D: '60'
  },
  answer: 'B'
},

{
  title: 'Ai dậy sớm nhất?',
  description: 'A dậy lúc 6:30, B dậy lúc 5:45, C dậy lúc 7:00.',
  options: {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'Không ai'
  },
  answer: 'B'
},

{
  title: 'Số nào khác loại?',
  description: 'Các số: 4, 8, 12, 15.',
  options: {
    A: '4',
    B: '8',
    C: '12',
    D: '15'
  },
  answer: 'D'
},
{
  title: 'Ai lớn tuổi nhất?',
  description: 'An bằng 2 lần tuổi Bình. Cường lớn hơn Bình 3 tuổi. Tổng tuổi cả 3 là 39 tuổi. Ai lớn tuổi nhất?',
  options: {
    A: 'An',
    B: 'Bình',
    C: 'Cường',
    D: 'Không xác định'
  },
  answer: 'A'
},

{
  title: 'Ngày nào?',
  description: 'Nếu hôm qua là thứ Năm, thì ngày kia (hai ngày sau hôm nay) là ngày nào?',
  options: {
    A: 'Thứ Bảy',
    B: 'Chủ Nhật',
    C: 'Thứ Sáu',
    D: 'Thứ Hai'
  },
  answer: 'A'
},

{
  title: 'Ai vào phòng cuối cùng?',
  description: 'Bình vào phòng trước An, Cường vào phòng sau Bình nhưng trước An. Ai vào phòng cuối cùng?',
  options: {
    A: 'An',
    B: 'Bình',
    C: 'Cường',
    D: 'Không xác định'
  },
  answer: 'A'
},

{
  title: 'Tìm số thiếu',
  description: 'Dãy: 3, 6, 11, 18, 27, ? (mỗi số là số trước cộng với thứ tự của nó: +3, +5, +7, +9, ...). Số tiếp theo là?',
  options: {
    A: '36',
    B: '37',
    C: '39',
    D: '40'
  },
  answer: 'C'
},

{
  title: 'Chia nhóm cân bằng',
  description: 'Chia các số 1..9 thành hai nhóm sao cho tổng mỗi nhóm bằng 25. Nhóm nào đúng?',
  options: {
    A: '{9,8,7,1} và {6,5,4,3,2}',
    B: '{9,8,4,3,1} và {7,6,5,2}',
    C: '{9,7,6,2,1} và {8,5,4,3}',
    D: 'Không thể chia đều'
  },
  answer: 'C'
},

{
  title: 'Ai nói thật?',
  description: 'Trong ba câu: An: "Tôi không trộm." Bình: "An trộm." Cường: "Bình nói thật." Biết rằng đúng duy nhất một người nói thật. Ai là kẻ trộm?',
  options: {
    A: 'An',
    B: 'Bình',
    C: 'Cường',
    D: 'Không đủ thông tin'
  },
  answer: 'A'
},

{
  title: 'Ai nhiều tiền nhất?',
  description: 'A có 3 đồng, B có gấp đôi A, C có A + B. Ai nhiều tiền nhất?',
  options: {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'A và B bằng nhau'
  },
  answer: 'C'
},

{
  title: 'Số nào khác loại?',
  description: 'Các chữ số: 121, 131, 141, 151. Số nào không phải số nguyên tố?',
  options: {
    A: '121',
    B: '131',
    C: '151',
    D: '131 và 151'
  },
  answer: 'A'
},

{
  title: 'Ai đến trước?',
  description: 'Xe A xuất phát lúc 8:00 với vận tốc 60 km/h. Xe B xuất phát cùng lúc với vận tốc 80 km/h, nhưng khởi hành muộn 30 phút. Xe nào đến đích (cùng quãng đường) trước?',
  options: {
    A: 'Xe A',
    B: 'Xe B',
    C: 'Họ đến cùng lúc',
    D: 'Không đủ thông tin'
  },
  answer: 'B'
},

{
  title: 'Suy luận logic đơn giản',
  description: 'Mệnh đề: "Nếu trời mưa thì đường ướt." Ngày hôm nay đường ướt nhưng không biết trời có mưa không. Điều nào hợp lý nhất?',
  options: {
    A: 'Chắc chắn trời mưa',
    B: 'Chắc chắn không mưa',
    C: 'Có thể mưa hoặc do nguyên nhân khác',
    D: 'Luôn luôn mưa khi đường ướt'
  },
  answer: 'C'
},
{
  title: 'Ai ăn nhanh nhất?',
  description: 'A ăn xong 1 phần cơm trong 10 phút, B ăn trong 8 phút, C ăn trong 12 phút.',
  options: {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'A và B bằng nhau'
  },
  answer: 'B'
},

{
  title: 'Số nào khác loại?',
  description: '3, 5, 7, 9',
  options: {
    A: '3',
    B: '5',
    C: '7',
    D: '9'
  },
  answer: 'D'
},

{
  title: 'Thứ tự tuổi',
  description: 'An lớn hơn Bình, Cường nhỏ hơn Bình. Ai trẻ nhất?',
  options: {
    A: 'An',
    B: 'Bình',
    C: 'Cường',
    D: 'Không xác định'
  },
  answer: 'C'
},

{
  title: 'Sắp xếp từ bé đến lớn',
  description: '12, 5, 19, 7 → số nào đứng thứ hai nếu sắp xếp tăng dần?',
  options: {
    A: '5',
    B: '7',
    C: '12',
    D: '19'
  },
  answer: 'B'
},

{
  title: 'Số tiếp theo là gì?',
  description: '2, 4, 8, 16, ...',
  options: {
    A: '20',
    B: '24',
    C: '32',
    D: '30'
  },
  answer: 'C'
},

{
  title: 'Ai đi ngủ muộn nhất?',
  description: 'A ngủ lúc 22:30, B ngủ lúc 23:00, C ngủ lúc 21:45.',
  options: {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'Không ai'
  },
  answer: 'B'
},

{
  title: 'Số nào chia hết cho 3?',
  description: '14, 18, 22, 25',
  options: {
    A: '14',
    B: '18',
    C: '22',
    D: '25'
  },
  answer: 'B'
},

{
  title: 'Ai đứng giữa?',
  description: 'Minh đứng giữa An và Bình. Bình đứng bên trái Minh.',
  options: {
    A: 'An',
    B: 'Minh',
    C: 'Bình',
    D: 'Không xác định'
  },
  answer: 'B'
},

{
  title: 'Tổng nhỏ nhất?',
  description: 'Cặp số nào có tổng nhỏ nhất?',
  options: {
    A: '3 và 9',
    B: '5 và 7',
    C: '1 và 8',
    D: '2 và 4'
  },
  answer: 'D'
},

{
  title: 'Số nào lớn hơn 50?',
  description: '45, 50, 55, 49',
  options: {
    A: '45',
    B: '50',
    C: '55',
    D: '49'
  },
  answer: 'C'
},
{
  title: 'Ai có nhiều sách nhất?',
  description: 'An có 12 cuốn sách, Bình có 9 cuốn, Cường có 15 cuốn. Ai có nhiều sách nhất?',
  options: {
    A: 'An',
    B: 'Bình',
    C: 'Cường',
    D: 'An và Bình bằng nhau'
  },
  answer: 'C'
},

{
  title: 'Không thể chia đều?',
  description: 'Chia các số 1..9 thành hai nhóm sao cho tổng mỗi nhóm bằng nhau.',
  options: {
    A: 'Có thể chia được',
    B: 'Có thể chia được nếu đổi một số',
    C: 'Không thể chia đều được',
    D: 'Chỉ chia được thành 3 nhóm'
  },
  answer: 'C'
},

{
  title: 'Ai tới muộn nhất?',
  description: 'Cuộc họp bắt đầu lúc 8:00. An đến lúc 7:50, Bình đến lúc 8:05, Cường đến lúc 8:00. Ai tới muộn nhất?',
  options: {
    A: 'An',
    B: 'Bình',
    C: 'Cường',
    D: 'An và C cùng muộn'
  },
  answer: 'B'
},

{
  title: 'Ai nói thật?',
  description: 'An: "Tôi luôn nói thật." Bình: "An nói dối." Cường: "Bình nói dối." Chỉ một người nói thật. Người nói thật là ai?',
  options: {
    A: 'An',
    B: 'Bình',
    C: 'Cường',
    D: 'Không xác định'
  },
  answer: 'C'
},

{
  title: 'Tìm khối lượng từng món',
  description: 'Ba vật A, B, C có: A + B = 20kg, B + C = 26kg, A + C = 24kg. Hỏi khối lượng A, B, C là bao nhiêu?',
  options: {
    A: 'A=9, B=11, C=15',
    B: 'A=10, B=10, C=15',
    C: 'A=8, B=12, C=15',
    D: 'Không đủ dữ kiện'
  },
  answer: 'A'
},

{
  title: 'Số nào không phải số nguyên tố?',
  description: 'Các số: 19, 23, 25, 29. Số nào không phải số nguyên tố?',
  options: {
    A: '19',
    B: '23',
    C: '25',
    D: '29'
  },
  answer: 'C'
},

{
  title: 'Chia kẹo cho 3 người',
  description: 'Có 20 viên kẹo chia cho 3 người đều nhau, còn dư 2 viên. Nếu muốn chia đều không dư, cần thêm bao nhiêu viên?',
  options: {
    A: '1',
    B: '2',
    C: '4',
    D: '5'
  },
  answer: 'A'
},

{
  title: 'Số tiếp theo trong dãy',
  description: 'Dãy số: 2, 3, 5, 7, 11, ... Số tiếp theo là?',
  options: {
    A: '12',
    B: '13',
    C: '15',
    D: '17'
  },
  answer: 'B'
},

{
  title: 'Ai đứng cao nhất?',
  description: 'A cao hơn B, B cao hơn C, C cao hơn D, D cao hơn E, E cao hơn F. Người cao nhất là ai?',
  options: {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'F'
  },
  answer: 'A'
},

{
  title: 'Đoán chữ',
  description: 'Từ nào sau đây là danh từ?',
  options: {
    A: 'Ăn',
    B: 'Chạy',
    C: 'Bàn',
    D: 'Ngủ'
  },
  answer: 'C'
},
{
  title: 'Tìm số còn thiếu',
  description: '2, 4, 8, 16, ?, 64. Số còn thiếu là gì?',
  options: {
    A: '24',
    B: '30',
    C: '32',
    D: '48'
  },
  answer: 'C'
},
{
  title: 'Trứng và gà',
  description: 'Một người có 3 quả trứng. Anh ta làm vỡ 1 quả, luộc 1 quả và ăn 1 quả. Hỏi còn lại bao nhiêu quả?',
  options: {
    A: '0',
    B: '1',
    C: '2',
    D: '3'
  },
  answer: 'B'
},
{
  title: 'Ai uống nước?',
  description: 'Có 5 người A, B, C, D, E. A đang ăn, B đang ngủ, C đang đọc sách, D đang chạy bộ. Vậy ai đang uống nước?',
  options: {
    A: 'E',
    B: 'A',
    C: 'D',
    D: 'Không ai'
  },
  answer: 'A'
},
{
  title: 'Đồng hồ hỏng',
  description: 'Một chiếc đồng hồ hỏng đứng im ở 3 giờ. Hỏi mỗi ngày nó đúng mấy lần?',
  options: {
    A: '1 lần',
    B: '2 lần',
    C: '0 lần',
    D: '4 lần'
  },
  answer: 'B'
},
{
  title: 'Chia táo',
  description: 'Bạn có 10 quả táo và chia cho 10 người, mỗi người một quả. Nhưng vẫn còn một quả trong giỏ. Làm sao được?',
  options: {
    A: 'Giữ lại 1 quả',
    B: 'Một người vẫn giữ nguyên quả táo trong giỏ',
    C: 'Làm rơi 1 quả',
    D: 'Ăn 1 quả'
  },
  answer: 'B'
},
{
  title: 'Cân nặng kỳ lạ',
  description: 'Một con mèo nặng 3kg cộng thêm nửa con mèo. Hỏi con mèo nặng bao nhiêu?',
  options: {
    A: '3kg',
    B: '4kg',
    C: '5kg',
    D: '6kg'
  },
  answer: 'B'
},
{
  title: 'Xếp số',
  description: 'Sắp xếp các số 2,4,6,8 sao cho tổng của mỗi cặp liền kề đều bằng 10.',
  options: {
    A: '2,8,4,6',
    B: '6,4,2,8',
    C: '4,6,2,8',
    D: '8,2,6,4'
  },
  answer: 'A'
},
{
  title: 'Cầu qua sông',
  description: 'Có 3 người muốn qua cầu vào ban đêm chỉ có 1 cây đèn pin. Cầu chỉ chịu được 2 người cùng lúc. Hỏi phải đi ít nhất mấy lần?',
  options: {
    A: '2',
    B: '3',
    C: '4',
    D: '5'
  },
  answer: 'C'
},
{
  title: 'Ai nói thật', 
  description: 'Trang nói: Tôi luôn nói sự thật. An nói: Trang đôi khi nói dối. Hải không nói gì. Ai có khả năng đang nói thật?', 
  options: { 
    A: 'Trang', 
    B: 'An', 
    C: 'Hải', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Cái nào nặng hơn', 
  description: 'Chiếc hộp A nặng 35g, hộp B nặng 73g, hộp C nặng 56g. Hộp nào nặng nhất?', 
  options: { 
    A: 'Hộp A', 
    B: 'Hộp B', 
    C: 'Hộp C', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Số tiếp theo trong dãy', 
  description: 'Dãy: 6, 8, 11, 13, 16, ... Số tiếp theo là?', 
  options: { 
    A: '17', 
    B: '18', 
    C: '19', 
    D: '21', 
  },
  answer: 'B'
},
{
  title: 'Ai lớn tuổi nhất', 
  description: 'Oanh 76 tuổi, Minh 27 tuổi, Hà 75 tuổi. Ai lớn tuổi nhất?', 
  options: { 
    A: 'Oanh', 
    B: 'Minh', 
    C: 'Hà', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Ai chạy nhanh nhất', 
  description: 'Tuấn chạy 7.4 km/h, Trang chạy 2.8 km/h, Minh chạy 3.3 km/h. Ai chạy nhanh nhất?', 
  options: { 
    A: 'Tuấn', 
    B: 'Trang', 
    C: 'Minh', 
    D: 'Bằng nhau', 
  },
  answer: 'A'
},
{
  title: 'Ai chạy nhanh nhất', 
  description: 'Dũng chạy 4.5 km/h, Oanh chạy 6.0 km/h, Lan chạy 1.3 km/h. Ai chạy nhanh nhất?', 
  options: { 
    A: 'Dũng', 
    B: 'Oanh', 
    C: 'Lan', 
    D: 'Bằng nhau', 
  },
  answer: 'B'
},
{
  title: 'Quan hệ trong gia đình', 
  description: 'Trang là cha của Nga. Nga là mẹ của Minh. Mối quan hệ giữa Trang và Minh là gì?', 
  options: { 
    A: 'Ông/bà', 
    B: 'Bác', 
    C: 'Chú', 
    D: 'Không liên quan', 
  },
  answer: 'A'
},
{
  title: 'Ai cao nhất', 
  description: 'An cao 194cm, Quân cao 182cm, Cường cao 156cm. Ai cao nhất?', 
  options: { 
    A: 'An', 
    B: 'Quân', 
    C: 'Cường', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Cái nào nặng hơn', 
  description: 'Chiếc hộp A nặng 14g, hộp B nặng 88g, hộp C nặng 74g. Hộp nào nặng nhất?', 
  options: { 
    A: 'Hộp A', 
    B: 'Hộp B', 
    C: 'Hộp C', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title:'Số tiếp theo trong dãy', 
  description: 'Dãy: 7, 9, 12, 14, 17, ... Số tiếp theo là?', 
  options: { 
    A:'18', 
    B:'19', 
    C: '20', 
    D: '22', 
  },
  answer: 'B'
},
{
  title: 'Ai lấy bánh', 
  description: 'Tuấn nói: Vy lấy. Vy nói: Trang không lấy. Trang nói: Tuấn nói dối. Một người nói thật. Ai lấy bánh?', 
  options: { 
    A: 'Tuấn', 
    B: 'Vy', 
    C: 'Trang', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Màu xuất hiện nhiều nhất', 
  description: '6 hình màu đỏ, 0 hình màu xanh, 1 hình màu vàng, 0 hình màu tím, 6 hình màu đen, 3 hình màu trắng, 1 hình màu cam, 5 hình màu hồng. Màu nào có nhiều nhất?', 
  options: { 
    A: 'đỏ', 
    B: 'xanh', 
    C: 'vàng', 
    D: 'tím', 
  },
  answer: 'A'
},
{
  title: 'Tính nhiệt độ trung bình', 
  description: 'Nhiệt độ hôm nay ở Đà Nẵng: 24°C, 29°C, 26°C. Nhiệt độ trung bình xấp xỉ bao nhiêu (làm tròn)?', 
  options: { 
    A: '25', 
    B: '26', 
    C: '27', 
    D: '28', 
  },
  answer: 'B'
},
{
  title: 'Quan hệ trong gia đình', 
  description: 'Nga là cha của Cường. Cường là mẹ của An. Mối quan hệ giữa Nga và An là gì?', 
  options: { 
    A: 'Ông/bà', 
    B: 'Bác', 
    C: 'Chú', 
    D: 'Không liên quan', 
  },
  answer: 'A'
},
{
  title: 'Số tiếp theo trong dãy', 
  description: 'Dãy: 5, 7, 10, 12, 15, ... Số tiếp theo là?', 
  options: { 
    A: '16', 
    B: '17', 
    C: '18', 
    D: '20', 
  },
  answer: 'B'
},
{
  title: 'Ai cao nhất', 
  description: 'Cường cao 179cm, Dũng cao 166cm, Lan cao 155cm. Ai cao nhất?', 
  options: { 
    A: 'Cường', 
    B: 'Dũng', 
    C: 'Lan', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Ai đứng giữa', 
  description: 'Lan, An, Oanh đứng thành hàng theo thứ tự. Ai đứng giữa?', 
  options: { 
    A: 'Lan', 
    B: 'An', 
    C: 'Oanh', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Ai nặng nhất', 
  description: 'Trang nặng 84kg, Phương nặng 57kg, Bình nặng 36kg. Ai nặng nhất?', 
  options: { 
    A: 'Trang', 
    B: 'Phương', 
    C: 'Bình', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Logic điều kiện', 
  description: 'Nếu nhiệt độ < 20°C thì Dũng mang áo khoác. Hôm nay Dũng không mang áo khoác. Có thể kết luận gì?', 
  options: { 
    A: 'Hôm nay không nhiệt độ < 20°C', 
    B: 'Hôm nay nhiệt độ < 20°C', 
    C: 'Không thể kết luận', 
    D: 'Câu sai', 
  },
  answer: 'C'
},
{
  title: 'Quan hệ trong gia đình', 
  description: 'Hải là cha của Bình. Bình là mẹ của Phương. Mối quan hệ giữa Hải và Phương là gì?', 
  options: { 
    A: 'Ông/bà', 
    B: 'Bác', 
    C: 'Chú', 
    D: 'Không liên quan', 
  },
  answer: 'A'
},
{
  title: 'Chọn phát biểu đúng', 
  description: 'A = 2 x 2. Chọn phát biểu đúng về A.', 
  options: { 
    A: 'A là số chẵn', 
    B: 'A > 3', 
    C: 'A < 6', 
    D: 'Không có phát biểu nào đúng', 
  },
  answer: 'B'
},
{
  title: 'Ai làm việc lâu nhất', 
  description: 'Lan làm 7 giờ, Hải làm 4 giờ, Vy làm 6 giờ. Ai làm việc lâu nhất?', 
  options: { 
    A: 'Lan', 
    B: 'Hải', 
    C: 'Vy', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Ai lớn tuổi nhất', 
  description: 'Tuấn 68 tuổi, Cường 26 tuổi, Bình 47 tuổi. Ai lớn tuổi nhất?', 
  options: { 
    A: 'Tuấn', 
    B: 'Cường', 
    C: 'Bình', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Ai lấy bánh', 
  description: 'Dũng nói: Cường lấy. Cường nói: Oanh không lấy. Oanh nói: Dũng nói dối. Một người nói thật. Ai lấy bánh?', 
  options: { 
    A: 'Dũng', 
    B: 'Cường', 
    C: 'Oanh', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Cái nào nặng hơn', 
  description: 'Chiếc hộp A nặng 67g, hộp B nặng 90g, hộp C nặng 1g. Hộp nào nặng nhất?', 
  options: { 
    A: 'Hộp A', 
    B: 'Hộp B', 
    C: 'Hộp C', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Số tiếp theo trong dãy', 
  description: 'Dãy: 0, 12, 24, 36, 48, ... Số tiếp theo là?', 
  options: { 
    A: '48', 
    B: '60', 
    C: '72', 
    D: '84', 
  },
  answer: 'B'
},
{
  title: 'Ai làm việc lâu nhất', 
  description: 'Nga làm 2 giờ, Cường làm 5 giờ, Vy làm 7 giờ. Ai làm việc lâu nhất?', 
  options: { 
    A: 'Nga', 
    B: 'Cường', 
    C: 'Vy', 
    D: 'Không ai', 
  },
  answer: 'C'
},
{
  title: 'Ai chạy nhanh nhất', 
  description: 'Hải chạy 5.6 km/h, Nga chạy 3.7 km/h, Phương chạy 10.7 km/h. Ai chạy nhanh nhất?', 
  options: { 
    A: 'Hải', 
    B: 'Nga', 
    C: 'Phương', 
    D: 'Bằng nhau', 
  },
  answer: 'C'
},
{
  title: 'Ai cao nhất', 
  description: 'Lan cao 170cm, Nga cao 156cm, Cường cao 156cm. Ai cao nhất?', 
  options: { 
    A: 'Lan', 
    B: 'Nga', 
    C: 'Cường', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Ai tiêu nhiều nhất', 
  description: 'Quân tiêu 73k, Oanh tiêu 115k, Tuấn tiêu 141k. Ai tiêu nhiều nhất?', 
  options: { 
    A: 'Quân', 
    B: 'Oanh', 
    C: 'Tuấn', 
    D: 'Không ai', 
  },
  answer: 'C'
},
{
  title: 'Ai nói thật', 
  description: 'Lan nói: Tôi luôn nói sự thật. Bình nói: Lan đôi khi nói dối. Oanh không nói gì. Ai có khả năng đang nói thật?', 
  options: { 
    A: 'Lan', 
    B: 'Bình', 
    C: 'Oanh', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Tìm số sai trong dãy', 
  description: 'Dãy: 4, 10, 16, 22, 30, 34. Số nào không đúng quy luật?', 
  options: { 
    A: '30', 
    B: '34', 
    C: '4', 
    D: '10', 
  },
  answer: 'A'
},
{
  title: 'Số tiếp theo trong dãy', 
  description: 'Dãy: 7, 14, 21, 28, 35, ... Số tiếp theo là?', 
  options: { 
    A: '35', 
    B: '42', 
    C: '49', 
    D: '56', 
  },
  answer: 'B'
},
{
  title: 'Ai tiêu nhiều nhất', 
  description: 'Hà tiêu 140k, Cường tiêu 187k, Tuấn tiêu 181k. Ai tiêu nhiều nhất?', 
  options: { 
    A: 'Hà', 
    B: 'Cường', 
    C: 'Tuấn', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Ai nặng nhất', 
  description: 'Hà nặng 40kg, Hải nặng 81kg, Minh nặng 101kg. Ai nặng nhất?', 
  options: { 
    A: 'Hà', 
    B: 'Hải', 
    C: 'Minh', 
    D: 'Không ai', 
  },
  answer: 'C'
},
{
  title: 'Tính nhiệt độ trung bình', 
  description: 'Nhiệt độ hôm nay ở Hà Nội: 30°C, 21°C, 22°C. Nhiệt độ trung bình xấp xỉ bao nhiêu (làm tròn)?', 
  options: { 
    A: '23', 
    B: '24', 
    C: '25', 
    D: '26', 
  },
  answer: 'B'
},
{
  title: 'Logic điều kiện', 
  description: 'Nếu nhiệt độ < 20°C thì Nga mang áo khoác. Hôm nay Nga không mang áo khoác. Có thể kết luận gì?', 
  options: { 
    A: 'Hôm nay không nhiệt độ < 20°C', 
    B: 'Hôm nay nhiệt độ < 20°C', 
    C: 'Không thể kết luận', 
    D: 'Câu sai', 
  },
  answer: 'C'
},
{
  title: 'Ai nặng nhất', 
  description: 'Hà nặng 82kg, Trang nặng 86kg, Phương nặng 74kg. Ai nặng nhất?', 
  options: { 
    A: 'Hà', 
    B: 'Trang', 
    C: 'Phương', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Tìm số sai trong dãy', 
  description: 'Dãy: 10, 14, 23, 22, 26, 30. Số nào không đúng quy luật?', 
  options: { 
    A: '23', 
    B: '22', 
    C: '26', 
    D: '30', 
  },
  answer: 'A'
},
{
  title: 'Ai làm việc lâu nhất', 
  description: 'An làm 1 giờ, Hà làm 4 giờ, Phương làm 6 giờ. Ai làm việc lâu nhất?', 
  options: { 
    A: 'An', 
    B: 'Hà', 
    C: 'Phương', 
    D: 'Không ai', 
  },
  answer: 'C'
},
{
  title: 'Ai chạy nhanh nhất', 
  description: 'An chạy 10.6 km/h, Bình chạy 10.5 km/h, Vy chạy 6.4 km/h. Ai chạy nhanh nhất?', 
  options: { 
    A: 'An', 
    B: 'Bình', 
    C: 'Vy', 
    D: 'Bằng nhau', 
  },
  answer: 'A'
},
{
  title: 'Ai đến sớm nhất', 
  description: 'Lan đến lúc 8:54, Dũng đến lúc 9:04, Hà đến lúc 8:23. Ai đến sớm nhất?', 
  options: { 
    A: 'Lan', 
    B: 'Dũng', 
    C: 'Hà', 
    D: 'Không ai', 
  },
  answer: 'C'
},
{
  title: 'Ai nặng nhất', 
  description: 'Minh nặng 45kg, Dũng nặng 53kg, Cường nặng 74kg. Ai nặng nhất?', 
  options: { 
    A: 'Minh', 
    B: 'Dũng', 
    C: 'Cường', 
    D: 'Không ai', 
  },
  answer: 'C'
},
{
  title: 'Ai lấy bánh', 
  description: 'Lan nói: Minh lấy. Minh nói: Dũng không lấy. Dũng nói: Lan nói dối. Một người nói thật. Ai lấy bánh?', 
  options: { 
    A: 'Lan', 
    B: 'Minh', 
    C: 'Dũng', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Ai cao nhất', 
  description: 'Cường cao 147cm, Bình cao 195cm, Tuấn cao 166cm. Ai cao nhất?', 
  options: { 
    A: 'Cường', 
    B: 'Bình', 
    C: 'Tuấn', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Ai đứng giữa', 
  description: 'Lan, Oanh, An đứng thành hàng theo thứ tự. Ai đứng giữa?', 
  options: { 
    A: 'Lan', 
    B: 'Oanh', 
    C: 'An', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Ai lấy bánh', 
  description: 'Bình nói: Phương lấy. Phương nói: Cường không lấy. Cường nói: Bình nói dối. Một người nói thật. Ai lấy bánh?', 
  options: { 
    A: 'Bình', 
    B: 'Phương', 
    C: 'Cường', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Ai tiêu nhiều nhất', 
  description: 'Dũng tiêu 146k, Hà tiêu 101k, Vy tiêu 50k. Ai tiêu nhiều nhất?', 
  options: { 
    A: 'Dũng', 
    B: 'Hà', 
    C: 'Vy', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Cái nào nặng hơn', 
  description: 'Chiếc hộp A nặng 13g, hộp B nặng 68g, hộp C nặng 27g. Hộp nào nặng nhất?', 
  options: { 
    A: 'Hộp A', 
    B: 'Hộp B', 
    C: 'Hộp C', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Tính nhiệt độ trung bình', 
  description: 'Nhiệt độ hôm nay ở Huế: 28°C, 20°C, 28°C. Nhiệt độ trung bình xấp xỉ bao nhiêu (làm tròn)?', 
  options: { 
    A: '24', 
    B: '25', 
    C: '26', 
    D: '27', 
  },
  answer: 'B'
},
{
  title: 'Số tiếp theo trong dãy', 
  description: 'Dãy: 8, 10, 13, 15, 18, ... Số tiếp theo là?', 
  options: { 
    A: '19', 
    B: '20', 
    C: '21', 
    D: '23', 
  },
  answer: 'B'
},
{
  title: 'Ai nói thật', 
  description: 'Phương nói: Tôi luôn nói sự thật. An nói: Phương đôi khi nói dối. Lan không nói gì. Ai có khả năng đang nói thật?', 
  options: { 
    A: 'Phương', 
    B: 'An', 
    C: 'Lan', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Ai cao nhất', 
  description: 'Oanh cao 188cm, Minh cao 179cm, Lan cao 187cm. Ai cao nhất?', 
  options: { 
    A: 'Oanh', 
    B: 'Minh', 
    C: 'Lan', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Chọn phát biểu đúng', 
  description: 'A = 2 x 7. Chọn phát biểu đúng về A.', 
  options: { 
    A: 'A là số chẵn', 
    B: 'A > 13', 
    C: 'A < 16', 
    D: 'Không có phát biểu nào đúng', 
  },
  answer: 'B'
},
{
  title: 'Ai làm việc lâu nhất', 
  description: 'Phương làm 6 giờ, An làm 7 giờ, Lan làm 5 giờ. Ai làm việc lâu nhất?', 
  options: { 
    A: 'Phương', 
    B: 'An', 
    C: 'Lan', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Số tiếp theo trong dãy', 
  description: 'Dãy: 12, 23, 34, 45, 56, ... Số tiếp theo là?', 
  options: { 
    A: '56', 
    B: '67', 
    C: '78', 
    D: '89', 
  },
  answer: 'B'
},
{
  title: 'Chọn phát biểu đúng', 
  description: 'A = 2 x 3. Chọn phát biểu đúng về A.', 
  options: { 
    A: 'A là số chẵn', 
    B: 'A > 5', 
    C: 'A < 8', 
    D: 'Không có phát biểu nào đúng', 
  },
  answer: 'B'
},
{
  title: 'Ai làm việc lâu nhất', 
  description: 'Bình làm 3 giờ, Nga làm 1 giờ, Vy làm 1 giờ. Ai làm việc lâu nhất?', 
  options: { 
    A: 'Bình', 
    B: 'Nga', 
    C: 'Vy', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Cái nào nặng hơn', 
  description: 'Chiếc hộp A nặng 13g, hộp B nặng 59g, hộp C nặng 64g. Hộp nào nặng nhất?', 
  options: { 
    A: 'Hộp A', 
    B: 'Hộp B', 
    C: 'Hộp C', 
    D: 'Không ai', 
  },
  answer: 'C'
},
{
  title: 'Ai làm việc lâu nhất', 
  description: 'An làm 4 giờ, Minh làm 6 giờ, Dũng làm 3 giờ. Ai làm việc lâu nhất?', 
  options: { 
    A: 'An', 
    B: 'Minh', 
    C: 'Dũng', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Ai đứng giữa', 
  description: 'Vy, Tuấn, Dũng đứng thành hàng theo thứ tự. Ai đứng giữa?', 
  options: { 
    A: 'Vy', 
    B: 'Tuấn', 
    C: 'Dũng', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Ai làm việc lâu nhất', 
  description: 'Nga làm 4 giờ, Cường làm 3 giờ, Dũng làm 8 giờ. Ai làm việc lâu nhất?', 
  options: { 
    A: 'Nga', 
    B: 'Cường', 
    C: 'Dũng', 
    D: 'Không ai', 
  },
  answer: 'C'
},
{
  title: 'Ai cao nhất', 
  description: 'Quân cao 195cm, Dũng cao 194cm, Bình cao 149cm. Ai cao nhất?', 
  options: { 
    A: 'Quân', 
    B: 'Dũng', 
    C: 'Bình', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Tính nhiệt độ trung bình', 
  description: 'Nhiệt độ hôm nay ở Hà Nội: 21°C, 24°C, 29°C. Nhiệt độ trung bình xấp xỉ bao nhiêu (làm tròn)?', 
  options: { 
    A: '24', 
    B: '25', 
    C: '26', 
    D: '27', 
  },
  answer: 'B'
},
{
  title: 'Ai lấy bánh', 
  description: 'Dũng nói: Hà lấy. Hà nói: Nga không lấy. Nga nói: Dũng nói dối. Một người nói thật. Ai lấy bánh?', 
  options: { 
    A: 'Dũng', 
    B: 'Hà', 
    C: 'Nga', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Ai làm việc lâu nhất', 
  description: 'Lan làm 8 giờ, Trang làm 7 giờ, Oanh làm 4 giờ. Ai làm việc lâu nhất?', 
  options: { 
    A: 'Lan', 
    B: 'Trang', 
    C: 'Oanh', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Tìm số sai trong dãy', 
  description: 'Dãy: 9, 11, 13, 15, 18, 19. Số nào không đúng quy luật?', 
  options: { 
    A: '18', 
    B: '19', 
    C: '9', 
    D: '11', 
  },
  answer: 'A'
},
{
  title: 'Quan hệ trong gia đình', 
  description: 'Nga là cha của Tuấn. Tuấn là mẹ của Quân. Mối quan hệ giữa Nga và Quân là gì?', 
  options: { 
    A: 'Ông/bà', 
    B: 'Bác', 
    C: 'Chú', 
    D: 'Không liên quan', 
  },
  answer: 'A'
},
{
  title: 'Logic điều kiện', 
  description: 'Nếu trời có gió mạnh thì Dũng mang áo khoác. Hôm nay Dũng không mang áo khoác. Có thể kết luận gì?', 
  options: { 
    A: 'Hôm nay không trời có gió mạnh', 
    B: 'Hôm nay trời có gió mạnh', 
    C: 'Không thể kết luận', 
    D: 'Câu sai', 
  },
  answer: 'C'
},
{
  title: 'Ai làm việc lâu nhất', 
  description: 'Quân làm 8 giờ, Bình làm 2 giờ, Minh làm 6 giờ. Ai làm việc lâu nhất?', 
  options: { 
    A: 'Quân', 
    B: 'Bình', 
    C: 'Minh', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Ai lấy bánh', 
  description: 'Phương nói: Hà lấy. Hà nói: Minh không lấy. Minh nói: Phương nói dối. Một người nói thật. Ai lấy bánh?', 
  options: { 
    A: 'Phương', 
    B: 'Hà', 
    C: 'Minh', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Ai tiêu nhiều nhất', 
  description: 'Bình tiêu 196k, Cường tiêu 167k, Dũng tiêu 108k. Ai tiêu nhiều nhất?', 
  options: { 
    A: 'Bình', 
    B: 'Cường', 
    C: 'Dũng', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Ai đến sớm nhất', 
  description: 'Vy đến lúc 7:40, Quân đến lúc 6:33, Hải đến lúc 8:01. Ai đến sớm nhất?', 
  options: { 
    A: 'Vy', 
    B: 'Quân', 
    C: 'Hải', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Ai làm việc lâu nhất', 
  description: 'Nga làm 4 giờ, Lan làm 5 giờ, Trang làm 1 giờ. Ai làm việc lâu nhất?', 
  options: { 
    A: 'Nga', 
    B: 'Lan', 
    C: 'Trang', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Ai đứng giữa', 
  description: 'Lan, Dũng, Tuấn đứng thành hàng theo thứ tự. Ai đứng giữa?', 
  options: { 
    A: 'Lan', 
    B: 'Dũng', 
    C: 'Tuấn', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Ai đến sớm nhất', 
  description: 'Dũng đến lúc 7:16, Bình đến lúc 6:01, Hải đến lúc 7:36. Ai đến sớm nhất?', 
  options: { 
    A: 'Dũng', 
    B: 'Bình', 
    C: 'Hải', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Ai tiêu nhiều nhất', 
  description: 'Hải tiêu 94k, Nga tiêu 64k, Cường tiêu 42k. Ai tiêu nhiều nhất?', 
  options: { 
    A: 'Hải', 
    B: 'Nga', 
    C: 'Cường', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Chọn phát biểu đúng', 
  description: 'A = 6 x 6. Chọn phát biểu đúng về A.', 
  options: { 
    A: 'A là số chẵn', 
    B: 'A > 35', 
    C: 'A < 38', 
    D: 'Không có phát biểu nào đúng', 
  },
  answer: 'B'
},
{
  title: 'Ai cao nhất', 
  description: 'Dũng cao 188cm, Minh cao 182cm, Oanh cao 170cm. Ai cao nhất?', 
  options: { 
    A: 'Dũng', 
    B: 'Minh', 
    C: 'Oanh', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Tìm số sai trong dãy', 
  description: 'Dãy: 10, 16, 25, 28, 34, 40. Số nào không đúng quy luật?', 
  options: { 
    A: '25', 
    B: '28', 
    C: '34', 
    D: '40', 
  },
  answer: 'A'
},
{
  title: 'Tính nhiệt độ trung bình', 
  description: 'Nhiệt độ hôm nay ở Hà Nội: 30°C, 27°C, 27°C. Nhiệt độ trung bình xấp xỉ bao nhiêu (làm tròn)?', 
  options: { 
    A: '27', 
    B: '28', 
    C: '29', 
    D: '30', 
  },
  answer: 'B'
},
{
  title: 'Ai nặng nhất', 
  description: 'Trang nặng 50kg, Bình nặng 69kg, Nga nặng 75kg. Ai nặng nhất?', 
  options: { 
    A: 'Trang', 
    B: 'Bình', 
    C: 'Nga', 
    D: 'Không ai', 
  },
  answer: 'C'
},
{
  title: 'Ai nói thật', 
  description: 'Trang nói: Tôi luôn nói sự thật. Minh nói: Trang đôi khi nói dối. Phương không nói gì. Ai có khả năng đang nói thật?', 
  options: { 
    A: 'Trang', 
    B: 'Minh', 
    C: 'Phương', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Ai chạy nhanh nhất', 
  description: 'Minh chạy 2.3 km/h, Trang chạy 5.7 km/h, Quân chạy 11.9 km/h. Ai chạy nhanh nhất?', 
  options: { 
    A: 'Minh', 
    B: 'Trang', 
    C: 'Quân', 
    D: 'Bằng nhau', 
  },
  answer: 'C'
},
{
  title: 'Ai cao nhất', 
  description: 'Hải cao 185cm, Phương cao 145cm, Cường cao 167cm. Ai cao nhất?', 
  options: { 
    A: 'Hải', 
    B: 'Phương', 
    C: 'Cường', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Số tiếp theo trong dãy', 
  description: 'Dãy: 12, 16, 20, 24, 28, ... Số tiếp theo là?', 
  options: { 
    A: '28', 
    B: '32', 
    C: '36', 
    D: '40', 
  },
  answer: 'B'
},
{
  title: 'Cái nào nặng hơn', 
  description: 'Chiếc hộp A nặng 41g, hộp B nặng 56g, hộp C nặng 6g. Hộp nào nặng nhất?', 
  options: { 
    A: 'Hộp A', 
    B: 'Hộp B', 
    C: 'Hộp C', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Chọn phát biểu đúng', 
  description: 'A = 9 x 2. Chọn phát biểu đúng về A.', 
  options: { 
    A: 'A là số chẵn', 
    B: 'A > 17', 
    C: 'A < 20', 
    D: 'Không có phát biểu nào đúng', 
  },
  answer: 'B'
},
{
  title: 'Logic điều kiện', 
  description: 'Nếu trời có gió mạnh thì Quân mang áo khoác. Hôm nay Quân không mang áo khoác. Có thể kết luận gì?', 
  options: { 
    A: 'Hôm nay không trời có gió mạnh', 
    B: 'Hôm nay trời có gió mạnh', 
    C: 'Không thể kết luận', 
    D: 'Câu sai', 
  },
  answer: 'C'
},
{
  title: 'Ai làm việc lâu nhất', 
  description: 'Cường làm 6 giờ, Vy làm 5 giờ, Hải làm 3 giờ. Ai làm việc lâu nhất?', 
  options: { 
    A: 'Cường', 
    B: 'Vy', 
    C: 'Hải', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Ai làm việc lâu nhất', 
  description: 'Phương làm 8 giờ, Trang làm 6 giờ, An làm 4 giờ. Ai làm việc lâu nhất?', 
  options: { 
    A: 'Phương', 
    B: 'Trang', 
    C: 'An', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Ai nói thật', 
  description: 'Phương nói: Tôi luôn nói sự thật. Dũng nói: Phương đôi khi nói dối. Vy không nói gì. Ai có khả năng đang nói thật?', 
  options: { 
    A: 'Phương', 
    B: 'Dũng', 
    C: 'Vy', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Quan hệ trong gia đình', 
  description: 'Lan là cha của Phương. Phương là mẹ của Hà. Mối quan hệ giữa Lan và Hà là gì?', 
  options: { 
    A: 'Ông/bà', 
    B: 'Bác', 
    C: 'Chú', 
    D: 'Không liên quan', 
  },
  answer: 'A'
},
{
  title: 'Chọn phát biểu đúng', 
  description: 'A = 5 x 8. Chọn phát biểu đúng về A.', 
  options: { 
    A: 'A là số chẵn', 
    B: 'A > 39', 
    C: 'A < 42', 
    D: 'Không có phát biểu nào đúng', 
  },
  answer: 'B'
},
{
  title: 'Màu xuất hiện nhiều nhất', 
  description: '0 hình màu đỏ, 1 hình màu xanh, 1 hình màu vàng, 4 hình màu tím, 0 hình màu đen, 6 hình màu trắng, 5 hình màu cam, 5 hình màu hồng. Màu nào có nhiều nhất?', 
  options: { 
    A: 'đỏ', 
    B: 'xanh', 
    C: 'vàng', 
    D: 'tím', 
  },
  answer: 'D'
},
{
  title: 'Ai lớn tuổi nhất', 
  description: 'Hải 52 tuổi, Minh 13 tuổi, Cường 30 tuổi. Ai lớn tuổi nhất?', 
  options: { 
    A: 'Hải', 
    B: 'Minh', 
    C: 'Cường', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Ai lấy bánh', 
  description: 'An nói: Tôi không lấy bánh. Bình nói: An lấy. Lan nói: Bình nói dối. Một người nói thật. Ai lấy bánh?', 
  options: { 
    A: 'An', 
    B: 'Bình', 
    C: 'Lan', 
    D: 'Không ai', 
  },
  answer: 'A'
},
{
  title: 'Ai đến sớm nhất', 
  description: 'Vy đến lúc 8:39, Dũng đến lúc 8:22, Quân đến lúc 8:25. Ai đến sớm nhất?', 
  options: { 
    A: 'Vy', 
    B: 'Dũng', 
    C: 'Quân', 
    D: 'Không ai', 
  },
  answer: 'B'
},
{
  title: 'Ai cao nhất', 
  description: 'Vy cao 173cm, Bình cao 173cm, Nga cao 186cm. Ai cao nhất?', 
  options: { 
    A: 'Vy', 
    B: 'Bình', 
    C: 'Nga', 
    D: 'Không ai', 
  },
  answer: 'C'
},
{
  title: 'Màu xuất hiện nhiều nhất', 
  description: '1 hình màu đỏ, 2 hình màu xanh, 0 hình màu vàng, 1 hình màu tím, 5 hình màu đen, 2 hình màu trắng, 5 hình màu cam, 0 hình màu hồng. Màu nào có nhiều nhất?', 
  options: { 
    A: 'đỏ', 
    B: 'xanh', 
    C: 'vàng', 
    D: 'tím', 
  },
  answer: 'D'
},
{
  title: 'Số gấp ba',
  description: 'Một số khi gấp 3 rồi trừ 6 được 21. Hỏi số đó là bao nhiêu?',
  options: {
    A: '9',
    B: '11',
    C: '12',
    D: '15'
  },
  answer: 'D'
},
{
  title: 'Con vật bí ẩn',
  description: 'Loài vật nào buổi sáng đi bằng 4 chân, buổi trưa đi bằng 2 chân, buổi tối đi bằng 3 chân?',
  options: {
    A: 'Con chó',
    B: 'Con người',
    C: 'Con khỉ',
    D: 'Con voi'
  },
  answer: 'B'
},
{
  title: 'Tìm hình khác biệt',
  description: 'Trong các chữ cái sau: A, E, I, O, U, Y. Chữ nào không thuộc nhóm?',
  options: {
    A: 'A',
    B: 'I',
    C: 'Y',
    D: 'O'
  },
  answer: 'C'
},
{
  title: 'Số bí ẩn',
  description: 'Tôi là số chẵn, lớn hơn 9 nhưng nhỏ hơn 13. Tôi là số nào?',
  options: {
    A: '8',
    B: '10',
    C: '11',
    D: '12'
  },
  answer: 'B'
},
{
  title: 'Ai chạy nhanh hơn?',
  description: 'Một con thỏ chạy nhanh hơn con rùa, con rùa chạy nhanh hơn con ốc sên. Con nào chậm nhất?',
  options: {
    A: 'Thỏ',
    B: 'Rùa',
    C: 'Ốc sên',
    D: 'Cả ba bằng nhau'
  },
  answer: 'C'
},
{
  title: 'Tìm số tiếp theo',
  description: '1, 1, 2, 3, 5, 8, ?. Số tiếp theo là gì?',
  options: {
    A: '11',
    B: '12',
    C: '13',
    D: '14'
  },
  answer: 'C'
},
{
  title: 'Chia bánh',
  description: 'Một chiếc bánh được chia cho 8 người, mỗi người một miếng. Hỏi cần cắt mấy lần?',
  options: {
    A: '3',
    B: '4',
    C: '7',
    D: '8'
  },
  answer: 'A'
},
{
  title: 'Con gì đi không chân?',
  description: 'Con gì đi khắp thế giới mà không cần chân?',
  options: {
    A: 'Âm thanh',
    B: 'Ánh sáng',
    C: 'Hình ảnh',
    D: 'Tin tức'
  },
  answer: 'D'
},
{
  title: 'Cân bằng cân',
  description: 'Một cái cân có hai bên bằng nhau. Một bên là 2kg táo, bên kia là 1kg táo và 1kg cam. Cái nào nặng hơn?',
  options: {
    A: 'Táo nặng hơn',
    B: 'Cam nặng hơn',
    C: 'Bằng nhau',
    D: 'Không xác định được'
  },
  answer: 'C'
},
{
  title: 'Người lạ',
  description: 'Một người đi vào quán nước và gọi một ly nước. Người phục vụ lấy súng bắn chỉ thiên. Người đó nói “Cảm ơn” rồi đi. Vì sao?',
  options: {
    A: 'Anh ta bị nghẹn',
    B: 'Anh ta bị ho nấc',
    C: 'Anh ta bị câm',
    D: 'Anh ta sợ tiếng súng'
  },
  answer: 'B'
},
{
  title: 'Đố mẹo động vật',
  description: 'Con gì đập thì sống, không đập thì chết?',
  options: {
    A: 'Con tim',
    B: 'Con cá',
    C: 'Con ếch',
    D: 'Con cua'
  },
  answer: 'A'
},
{
  title: 'Bóng đèn',
  description: 'Có 3 công tắc dưới tầng 1 và 1 bóng đèn trên tầng 2. Bạn chỉ được lên tầng 2 một lần. Làm sao biết công tắc nào bật bóng đèn?',
  options: {
    A: 'Bật từng công tắc một rồi chạy lên',
    B: 'Bật 1 công tắc một lúc lâu rồi tắt, sau đó bật công tắc khác',
    C: 'Nhờ người khác lên xem',
    D: 'Không thể biết'
  },
  answer: 'B'
},
{
  title: 'Ai có tiền nhiều nhất?',
  description: 'An có 5 đồng, Bình có gấp đôi An, Cường có ít hơn Bình 3 đồng. Ai có nhiều tiền nhất?',
  options: {
    A: 'An',
    B: 'Bình',
    C: 'Cường',
    D: 'An và C bằng nhau'
  },
  answer: 'B'
},

{
  title: 'Chia kẹo thông minh',
  description: 'Có 9 viên kẹo, chia đều cho 3 đứa trẻ. Mỗi đứa được bao nhiêu viên?',
  options: {
    A: '2',
    B: '3',
    C: '4',
    D: '5'
  },
  answer: 'B'
},

{
  title: 'Đổi chỗ',
  description: 'Ba người xếp hàng: An trước Bình, Cường sau Bình. Ai đứng giữa?',
  options: {
    A: 'An',
    B: 'Bình',
    C: 'Cường',
    D: 'Không xác định'
  },
  answer: 'B'
},

{
  title: 'Số nào là hình vuông?',
  description: 'Trong các số: 16, 18, 20, 22. Số nào là số chính phương?',
  options: {
    A: '16',
    B: '18',
    C: '20',
    D: '22'
  },
  answer: 'A'
},

{
  title: 'Ai nói thật?',
  description: 'An: "Tôi không phá vỡ cửa sổ." Bình: "An nói dối." Cường: "Bình nói thật." Một người nói thật, hai người nói dối. Ai nói thật?',
  options: {
    A: 'An',
    B: 'Bình',
    C: 'Cường',
    D: 'Không xác định'
  },
  answer: 'B'
},

{
  title: 'Lấy quả tặng bạn',
  description: 'Mẹ có 12 quả cam, tặng cho 3 người con đều nhau. Mỗi người được mấy quả?',
  options: {
    A: '3',
    B: '4',
    C: '5',
    D: '6'
  },
  answer: 'B'
},

{
  title: 'Đi bộ và chạy',
  description: 'A đi bộ 4 km trong 1 giờ; B chạy 8 km trong 40 phút. Ai đi nhanh hơn (tốc độ lớn hơn)?',
  options: {
    A: 'A',
    B: 'B',
    C: 'Bằng nhau',
    D: 'Không xác định'
  },
  answer: 'B'
},

{
  title: 'Số lẻ duy nhất',
  description: 'Trong dãy: 2, 4, 6, 9, 8. Số nào là số lẻ duy nhất?',
  options: {
    A: '2',
    B: '6',
    C: '9',
    D: '8'
  },
  answer: 'C'
},

{
  title: 'Ghép đôi',
  description: 'Bạn có các chữ cái: M, A, T, H. Ghép thành từ có nghĩa trong tiếng Anh?',
  options: {
    A: 'MATH',
    B: 'HAMT',
    C: 'TMAH',
    D: 'AMHT'
  },
  answer: 'A'
},

{
  title: 'Số chia hết',
  description: 'Trong các số: 21, 22, 24, 25 — số nào chia hết cho 6?',
  options: {
    A: '21',
    B: '22',
    C: '24',
    D: '25'
  },
  answer: 'C'
}

  ]);

  console.log('✅ Seed done');
  process.exit(0);
})();
