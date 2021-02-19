let arr = [
    {comment_id: 177, user_id: 653, comment_date: "05-20", comment_content: "cccc", parent_id: null, …}
1: {comment_id: 809, user_id: 522, comment_date: "06-13", comment_content: "111", parent_id: null, …}
2: {comment_id: 810, user_id: 522, comment_date: "06-13", comment_content: " 31", parent_id: "", …}
3: {comment_id: 811, user_id: 522, comment_date: "06-13", comment_content: "111", parent_id: null, …}
4: {comment_id: 812, user_id: 522, comment_date: "06-13", comment_content: " 231", parent_id: "", …}
5: {comment_id: 813, user_id: 522, comment_date: "06-13", comment_content: "12", parent_id: "177", …}
6: {comment_id: 814, user_id: 522, comment_date: "06-13", comment_content: " 11", parent_id: "", …}
7: {comment_id: 815, user_id: 522, comment_date: "06-13", comment_content: "131", parent_id: null, …}
8: {comment_id: 816, user_id: 522, comment_date: "06-13", comment_content: " 21", parent_id: "815", …}
9: {comment_id: 819, user_id: 43, comment_date: "06-13", comment_content: "666", parent_id: null, …}
10: {comment_id: 820, user_id: 43, comment_date: "06-13", comment_content: "真的6", parent_id: "819", …}
11: {comment_id: 821, user_id: 43, comment_date: "06-13", comment_content: "666", parent_id: null, …}
12: {comment_id: 822, user_id: 43, comment_date: "06-13", comment_content: "222", parent_id: "809", …}
13: {comment_id: 823, user_id: 43, comment_date: "06-13", comment_content: "789", parent_id: null, …}
14: {comment_id: 1111, user_id: 130, comment_date: "06-21", comment_content: "欧尼酱", parent_id: "177", …}
15: {comment_id: 1112, user_id: 130, comment_date: "06-21", comment_content: "是对的", parent_id: "177", …}
16: {comment_id: 1113, user_id: 130, comment_date: "06-21", comment_content: "端端端", parent_id: "177", …}
17: {comment_id: 1114, user_id: 130, comment_date: "06-21", comment_content: "钩子", parent_id: "809", …}
18: {comment_id: 1115, user_id: 130, comment_date: "06-21", comment_content: "顶顶顶顶顶顶", parent_id: "177", …}
19: {comment_id: 1890, user_id: 22, comment_date: "07-10", comment_content: "1234", parent_id: "821", …}
20: {comment_id: 2262, user_id: 4501, comment_date: "07-23", comment_content: "dd", parent_id: null, …}
21: {comment_id: 2263, user_id: 4501, comment_date: "07-23", comment_content: null, parent_id: null, …}
22: {comment_id: 2264, user_id: 4501, comment_date: "07-23", comment_content: null, parent_id: null, …}
23: {comment_id: 2265, user_id: 4501, comment_date: "07-23", comment_content: "测试", parent_id: null, …}
24: {comment_id: 2266, user_id: 4501, comment_date: "07-23", comment_content: "测试", parent_id: "177", …}
25: {comment_id: 2267, user_id: 4501, comment_date: "07-23", comment_content: "哈哈", parent_id: "809", …}
26: {comment_id: 2268, user_id: 4501, comment_date: "07-23", comment_content: "方法", parent_id: "809", …}
27: {comment_id: 2269, user_id: 4501, comment_date: "07-23", comment_content: "111", parent_id: "811", …}
28: {comment_id: 2270, user_id: 4501, comment_date: "07-23", comment_content: "111", parent_id: "811", …}
29: {comment_id: 2271, user_id: 4501, comment_date: "07-23", comment_content: "测试11", parent_id: null, …}
30: {comment_id: 2272, user_id: 4501, comment_date: "07-23", comment_content: "131", parent_id: "815", …}
31: {comment_id: 2273, user_id: 4501, comment_date: "07-23", comment_content: "11", parent_id: null, …}
32: {comment_id: 2274, user_id: 4501, comment_date: "07-23", comment_content: "22", parent_id: null, …}
33: {comment_id: 2275, user_id: 4501, comment_date: "07-23", comment_content: "测试二级", parent_id: "815", …}
34: {comment_id: 2809, user_id: 4915, comment_date: "08-06", comment_content: "3232", parent_id: "177", …}
35: {comment_id: 2810, user_id: 4915, comment_date: "08-06", comment_content: "3232", parent_id: "177", …}
36: {comment_id: 2811, user_id: 4915, comment_date: "08-06", comment_content: "3232", parent_id: "177", …}
37: {comment_id: 2812, user_id: 4915, comment_date: "08-06", comment_content: "32", parent_id: null, …}
38: {comment_id: 3060, user_id: 4251, comment_date: "08-09", comment_content: "1", parent_id: "2273", …}
39: {comment_id: 3115, user_id: 5248, comment_date: "08-11", comment_content: "哈哈哈,机器猫", parent_id: null, …}
40: {comment_id: 3116, user_id: 5248, comment_date: "08-11", comment_content: "你是机器猫的粉丝吗", parent_id: "177", …}
41: {comment_id: 3117, user_id: 5248, comment_date: "08-11", comment_content: "111", parent_id: "813", …}
42: {comment_id: 3118, user_id: 5248, comment_date: "08-11", comment_content: "222", parent_id: "3117", …}
43: {comment_id: 3119, user_id: 5248, comment_date: "08-11", comment_content: "333", parent_id: "3118", …}
44: {comment_id: 3120, user_id: 5248, comment_date: "08-11", comment_content: "55", parent_id: null, …}
45: {comment_id: 3121, user_id: 5248, comment_date: "08-11", comment_content: "机器猫2.0", parent_id: null, …}
46: {comment_id: 3122, user_id: 5248, comment_date: "08-11", comment_content: "你是机器猫的粉丝吗", parent_id: "813", …}
47: {comment_id: 3123, user_id: 5248, comment_date: "08-11", comment_content: "机器猫1", parent_id: "1111", …}
48: {comment_id: 3124, user_id: 5248, comment_date: "08-11", comment_content: "机器猫2", parent_id: "3123", …}
49: {comment_id: 3125, user_id: 5248, comment_date: "08-11", comment_content: "机器猫3", parent_id: "3124", …}
50: {comment_id: 3126, user_id: 5248, comment_date: "08-11", comment_content: "时代", parent_id: "1112", …}
51: {comment_id: 3864, user_id: 5718, comment_date: "09-04", comment_content: "555555555555", parent_id: null, …}
52: {comment_id: 3865, user_id: 5718, comment_date: "09-04", comment_content: "66666", parent_id: "3864", …}
53: {comment_id: 3866, user_id: 5718, comment_date: "09-04", comment_content: "66666", parent_id: null, …}
54: {comment_id: 3867, user_id: 5718, comment_date: "09-04", comment_content: "7777777777777777777777777777777777777777", parent_id: "3865", …}
55: {comment_id: 3868, user_id: 5718, comment_date: "09-04", comment_content: "哈哈哈哈哈哈哈哈", parent_id: null, …}
56: {comment_id: 3869, user_id: 5718, comment_date: "09-04", comment_content: "999999999999", parent_id: null, …}
57: {comment_id: 3870, user_id: 5718, comment_date: "09-04", comment_content: "8888888888", parent_id: "3867", …}
58: {comment_id: 3871, user_id: 5718, comment_date: "09-04", comment_content: "444", parent_id: "3119", …}
59: {comment_id: 4092, user_id: 6803, comment_date: "09-11", comment_content: "", parent_id: null, …}
60: {comment_id: 4093, user_id: 6803, comment_date: "09-11", comment_content: "", parent_id: null, …}
61: {comment_id: 4403, user_id: 6896, comment_date: "09-14", comment_content: "666", parent_id: null, …}
62: {comment_id: 4404, user_id: 6896, comment_date: "09-14", comment_content: "262", parent_id: null, …}
63: {comment_id: 4405, user_id: 6896, comment_date: "09-14", comment_content: "999", parent_id: null, …}
64: {comment_id: 4406, user_id: 6896, comment_date: "09-14", comment_content: "5959", parent_id: null, …}
65: {comment_id: 4575, user_id: 7310, comment_date: "09-20", comment_content: "你好", parent_id: "811", …}
66: {comment_id: 4918, user_id: 5131, comment_date: "10-08", comment_content: "yyyy", parent_id: null, …}
67: {comment_id: 5106, user_id: 7915, comment_date: "10-12", comment_content: "hahhahhahah", parent_id: null, …}
68: {comment_id: 5107, user_id: 7915, comment_date: "10-12", comment_content: "yyyyyy", parent_id: "5106", …}
69: {comment_id: 5479, user_id: 8970, comment_date: "11-04", comment_content: "88888888", parent_id: "177", …}
70: {comment_id: 5481, user_id: 8970, comment_date: "11-04", comment_content: "9999999", parent_id: "809", …}
71: {comment_id: 5852, user_id: 9817, comment_date: "11-24", comment_content: "alala", parent_id: "809", …}
72: {comment_id: 6062, user_id: 139, comment_date: "11-27", comment_content: "啛啛喳喳错错错错错错错错错错错错错错错错", parent_id: null, …}
73: {comment_id: 6063, user_id: 139, comment_date: "11-27", comment_content: "错错错错错222222222222222222", parent_id: "6062", …}
74: {comment_id: 6064, user_id: 139, comment_date: "11-27", comment_content: "aaaaaaaaaaaaaaaa", parent_id: null, …}
75: {comment_id: 6065, user_id: 139, comment_date: "11-27", comment_content: "二级二级二级二级二级", parent_id: "4918", …}
76: {comment_id: 6066, user_id: 139, comment_date: "11-27", comment_content: "少时诵诗书所所所所所所", parent_id: "5107", …}
77: {comment_id: 6067, user_id: 139, comment_date: "11-27", comment_content: "44444444444444444444444444444", parent_id: "6066", …}
78: {comment_id: 6068, user_id: 139, comment_date: "11-27", comment_content: "555555555555", parent_id: "6067", …}
79: {comment_id: 6283, user_id: 9865, comment_date: "12-04", comment_content: "你是吗", parent_id: "3122", …}
80: {comment_id: 6284, user_id: 9865, comment_date: "12-04", comment_content: "不要啊", parent_id: "177", …}
81: {comment_id: 6538, user_id: 10292, comment_date: "12-13", comment_content: "你好", parent_id: null, …}
82: {comment_id: 6539, user_id: 10292, comment_date: "12-13", comment_content: "你好", parent_id: null, …}
83: {comment_id: 6540, user_id: 10292, comment_date: "12-13", comment_content: "测试", parent_id: "177", …}
84: {comment_id: 7642, user_id: 11804, comment_date: "02-14", comment_content: "吴威", parent_id: 
]