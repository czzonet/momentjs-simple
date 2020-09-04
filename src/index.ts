import moment from "moment";

async function main() {
  const nowDate = new Date();
  console.log("\n----Date now---- ");
  console.log("[ISO string]");
  console.log(nowDate.toISOString());
  console.log("[UTC string]");
  console.log(nowDate.toUTCString());
  console.log("[Unix timestamp(ms)]");
  console.log(nowDate.valueOf());
  console.log("\n");

  const now = moment();
  console.log("\n----Moment now----");
  console.log(now.format());

  console.log("\n----Parse----");
  const day1 = moment("2020-08-15T10:10:10+08:00");
  const day2 = moment(1597457410000);
  const day3 = moment.unix(Math.floor(1597457410000 / 1000));
  const day1format = day1.format();
  const day2format = day2.format();
  const day3format = day3.format();
  console.log("[ISO string]");
  console.log(day1format);
  console.log("[Unix timestamp(ms)]");
  console.log(day2format);
  console.log("[Unix timestamp(s)]");
  console.log(day3format);

  console.log("\n----Format----");
  const day = moment("2020-08-15T10:10:10+08:00");
  const dayformat1 = day.format();
  const dayformat2 = day.format("YYYY-MM-DD HH:mm:ss");
  const ms = day.valueOf();
  const secend = day.unix();
  console.log("[ISO string]");
  console.log(dayformat1);
  console.log("[YYYY-MM-DD HH:mm:ss]");
  console.log(dayformat2);
  console.log("[Unix timestamp(ms)]");
  console.log(ms);
  console.log("[Unix timestamp(s)]");
  console.log(secend);

  console.log("\n----Timezone----");
  const utc0 = moment("2020-08-15T10:10:10+08:00").utcOffset(0).format();
  const utc9 = moment("2020-08-15T10:10:10+08:00").utcOffset(9).format();
  console.log("[utc0]");
  console.log(utc0);
  console.log("[utc9]");
  console.log(utc9);

  console.log("\n----i18n----");
  moment.locale("us");
  const enStr = moment("2020-08-15T10:10:10+08:00").format("MMMM");
  moment.locale("zh_CN");
  const zhStr = moment("2020-08-15T10:10:10+08:00").format("MMMM");
  console.log("[enStr]");
  console.log(enStr);
  console.log("[zhStr]");
  console.log(zhStr);

  debugger;
}

main().then();
