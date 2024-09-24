function printBillList() {
    const billContent = document.querySelector('.bill-list').cloneNode(true); // نسخ العنصر بدون التأثير على الصفحة
    const scripts = billContent.getElementsByTagName('script');
    
    // إزالة جميع السكربتات من المحتوى
    for (let i = scripts.length - 1; i >= 0; i--) {
        scripts[i].parentNode.removeChild(scripts[i]);
    }

    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <html>
            <head>
                <title>طباعة الفاتورة</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        direction: rtl;
                        text-align: right;
                    }
                    .bill-item {
                        border: 1px solid #000;
                        padding: 10px;
                        margin-bottom: 10px;
                    }
                    h1 {
                        color: #007bff;
                    }
                </style>
            </head>
            <body>
                <h1>الفاتورة</h1>
                ${billContent.innerHTML}
            </body>
        </html>
    `);

    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
    newWindow.close();
}