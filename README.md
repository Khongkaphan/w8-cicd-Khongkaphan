# w8-cicd-Khongkaphan
lab cicd cloud

## Exit Ticket

1. Continuous Integration ในงานนี้คือการที่ทุกครั้งที่ push หรือเปิด pull request, GitHub Actions จะ checkout code, ติดตั้ง dependencies และรัน automated tests ให้โดยอัตโนมัติ
2. งานนี้ยังไม่มี Continuous Delivery หรือ Continuous Deployment เพราะ workflow ตรวจสอบและทดสอบ code เท่านั้น ยังไม่ได้ build หรือ deploy application ไปยัง environment ใด
3. Green pipeline ยืนยันว่า steps ที่กำหนดไว้ทำงานสำเร็จและ tests ผ่าน แต่ไม่ได้ยืนยันว่า application มี test ครบทุกกรณีหรือใช้งานจริงได้สมบูรณ์
4. เราทดลองสร้าง red pipeline เพื่อพิสูจน์ว่า quality gate ตรวจพบ code ที่ผิดและหยุด pipeline ได้จริง พร้อมฝึกอ่าน failed step และ error log
5. หาก test ผ่านแต่ application ใช้งานจริงไม่ได้ ควรเพิ่ม integration หรือ end-to-end tests และเพิ่ม pipeline stage สำหรับ build และ deployment verification
