# w8-cicd-Khongkaphan
lab cicd cloud

## Exit Ticket

1. Continuous Integration ในงานนี้คือการที่ทุกครั้งที่ push หรือเปิด pull request, GitHub Actions จะ checkout code, ติดตั้ง dependencies และรัน automated tests ให้โดยอัตโนมัติ
2. งานนี้ยังไม่มี Continuous Delivery หรือ Continuous Deployment เพราะ workflow ตรวจสอบและทดสอบ code เท่านั้น ยังไม่ได้ build หรือ deploy application ไปยัง environment ใด
3. Green pipeline ยืนยันว่า steps ที่กำหนดไว้ทำงานสำเร็จและ tests ผ่าน แต่ไม่ได้ยืนยันว่า application มี test ครบทุกกรณีหรือใช้งานจริงได้สมบูรณ์
4. เราทดลองสร้าง red pipeline เพื่อพิสูจน์ว่า quality gate ตรวจพบ code ที่ผิดและหยุด pipeline ได้จริง พร้อมฝึกอ่าน failed step และ error log
5. หาก test ผ่านแต่ application ใช้งานจริงไม่ได้ ควรเพิ่ม integration หรือ end-to-end tests และเพิ่ม pipeline stage สำหรับ build และ deployment verification

## Lab Reflection

ก่อนทำแล็บนี้ ผมเข้าใจว่า CI/CD คือการนำขั้นตอน build, test และ deploy มาให้ระบบทำงานแทนมนุษย์ แต่ยังไม่เห็นภาพชัดเจนว่า code เปลี่ยนแปลงแล้วผ่านส่วนใดบ้าง หลังจากทดลองจริง ผมเข้าใจว่า Continuous Integration เริ่มตั้งแต่การ push code หรือเปิด pull request จากนั้น GitHub Actions จะสร้าง runner, checkout repository, ตั้งค่า Node.js, ติดตั้ง dependencies และรัน automated tests ตามลำดับ การเห็นสถานะเปลี่ยนจาก green เป็น red และกลับมา green ทำให้เห็นว่า pipeline เป็น quality gate ที่ตรวจสอบการเปลี่ยนแปลงแต่ละ commit ได้จริง

ขั้นตอนที่ใช้เวลามากที่สุดคือการตรวจสอบ workflow บน GitHub และรอให้ runner ทำงาน ปัญหาเกิดจากการแก้ expected value ของ test ให้ไม่ตรงกับ actual value วิธีหาสาเหตุคือดู job ที่ล้มเหลว เปิด step แรกที่เป็นสีแดง อ่าน error message แล้วเปรียบเทียบ expected กับ actual ก่อนแก้ไขและรัน `npm test` บนเครื่องอีกครั้ง Automation ช่วยให้ทุกการเปลี่ยนแปลงได้รับการตรวจสอบอย่างสม่ำเสมอ ลดโอกาสที่ code ที่ผิดจะถูก merge โดยไม่รู้ตัว ลำดับถัดไปที่ผมอยากเพิ่มคือ integration test และขั้นตอน deployment ไปยัง staging environment เพื่อทดสอบ application ในสภาพแวดล้อมที่ใกล้ production มากขึ้น
