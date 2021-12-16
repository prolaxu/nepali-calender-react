export default function NepaliNum(number) {
    const nums = {
        0: '०',
        1: '१',
        2: '२',
        3: '३',
        4: '४',
        5: '५',
        6: '६',
        7: '७',
        8: '८',
        9: '९'
      };
      const str_num=Array.from(number.toString()).map(Number);
      let newnum=str_num.map((item, index) =>nums[item] );
    return newnum;
}
