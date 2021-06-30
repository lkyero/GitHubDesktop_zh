def get_label_str(filename):
    temp_list = []
    with open(filename, 'r', encoding="utf-8") as f:
        # f.read()
        for line in f.readlines():
            # print(line.strip())  # 把末尾的'\n'删掉
            if '''label: "''' in line:
                # print(line)
                temp = line[line.index('''"'''):].strip('"')
                try:
                    temp2 = temp
                    temp = temp[:temp.index('''",''')]
                except ValueError:
                    print(temp.strip('\n'))
                    temp = temp2[:temp2.index('''"''')]
                    print(temp)
                # print(temp)
                if '''label: "''' in temp:
                    temp = temp[temp.index('''label: ''') + 7:]
                    # print(temp2)
                temp_list.append(temp)
    return temp_list


def write_txt(filename, temp):
    with open(filename, 'w', encoding="utf-8") as f:
        for el2 in temp:
            f.writelines(el2 + '\n')


temp_list1 = get_label_str('./old/main.js')
temp_list2 = get_label_str('./old/renderer.js')
temp_list3 = get_label_str('./new/main.js')
temp_list4 = get_label_str('./new/renderer.js')

# main.js
write_txt("test.txt", temp_list1)
write_txt("test2.txt", temp_list3)
# renderer.js
write_txt("test3.txt", temp_list2)
write_txt("test4.txt", temp_list4)
