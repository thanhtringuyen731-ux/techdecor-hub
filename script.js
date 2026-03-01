const PRODUCTS = [
    { 
        id: 1, 
        name: "Bàn phím cơ Keychron K8 Pro",
        category: "keyboard", 
        price: 1890000, 
        description: "Bàn phím cơ không dây chuyên nghiệp với Gateron Brown switches, hỗ trợ kết nối Bluetooth 5.1 và USB-C.",
        image: "../images/products/keyboard1.jpg", 
        specs: {
                "Switch": "Gateron Brown (Hot-swappable)",
                "Layout": "75% (84 keys)",
                "Kết nối": "Bluetooth 5.1 / USB-C",
                "Đèn": "RGB Backlit",
                "Chất liệu": "Aluminum frame + ABS keycaps"
                } 
    },
    {
        id: 2, 
        name: "Bàn phím cơ Leaven K68", 
        category: "keyboard",
        price: 690000,
        description: "Bàn phím cơ Leaven K68 thiết kế nhỏ gọn 68 phím, switch cơ học bền bỉ, LED Rainbow nổi bật, phù hợp game và làm việc.",
        image: "../images/products/keyboard2.jpg",
        specs: {
            "Switch": "Blue / Red Switch cơ học",
            "Layout": "68 phím (Compact 65%)",
            "Kết nối": "USB Type-C",
            "Đèn": "LED Rainbow",
            "Keycaps": "ABS Double-shot",
            "Tính năng": "Anti-ghosting full keys" 
        }
        },

    { 
        id: 3,
        name: "Màn hình Dell UltraSharp 27 U2720Q",
        category: "monitor",
        price: 11500000,
        description: "Màn hình Dell UltraSharp 27 inch độ phân giải 4K UHD, tấm nền IPS cao cấp, màu sắc chuẩn xác, phù hợp thiết kế đồ họa và làm việc chuyên nghiệp.",
        image: "../images/products/monitor1.jpg",
        specs: {
            "Kích thước": "27 inch",
            "Độ phân giải": "3840 x 2160 (4K UHD)",
            "Tấm nền": "IPS",
            "Tần số quét": "60Hz",
            "Độ sáng": "350 nits",
            "Độ phủ màu": "99% sRGB",
            "Cổng kết nối": "USB-C, HDMI, DisplayPort",
            "Điều chỉnh": "Nghiêng, xoay, nâng hạ độ cao"
        }
    },
    { 
        id: 4,
        name: "LG UltraGear 34\" 34GP83A-B",
        category: "monitor",
        price: 12900000,
        description: "Màn hình gaming LG UltraGear 34 inch cong siêu rộng, độ phân giải WQHD, tần số quét 144Hz, hỗ trợ G-Sync và FreeSync Premium cho trải nghiệm mượt mà.",
        image: "../images/products/monitor2.jpg",
        specs: {
            "Kích thước": "34 inch (Cong 1900R)",
            "Độ phân giải": "3440 x 1440 (WQHD)",
            "Tấm nền": "Nano IPS",
            "Tần số quét": "144Hz",
            "Thời gian phản hồi": "1ms (GtG)",
            "Công nghệ": "NVIDIA G-Sync Compatible, AMD FreeSync Premium",
            "Độ phủ màu": "98% DCI-P3",
            "Cổng kết nối": "HDMI, DisplayPort, USB Hub"
        }
    },
    { 
        id: 5, 
        name: "Ghế Ergonomic 07",
        category: "chair",
        price: 4990000,
        description: "Ghế công thái học Ergonomic 07 thiết kế hiện đại, hỗ trợ cột sống và thắt lưng tối ưu, chất liệu lưới thoáng khí phù hợp làm việc lâu dài.",
        image: "../images/products/chair1.jpg",
        specs: {
            "Chất liệu": "Lưới cao cấp + Khung thép sơn tĩnh điện",
            "Kích thước": "W 66cm x D 70cm x H 115–125cm",
            "Tựa đầu": "Có thể điều chỉnh độ cao",
            "Tựa lưng": "Ngả 90°–135°",
            "Tay vịn": "Điều chỉnh 2D",
            "Bánh xe": "Xoay 360° chống trượt",
            "Tải trọng tối đa": "120 kg"
        }  
    },
    { 
        id: 6, 
        name: "Ghế Gaming Corsair T3 Rush",
        category: "chair",
        price: 5490000,
        description: "Ghế gaming Corsair T3 Rush thiết kế phong cách thể thao, đệm mút cao cấp bọc vải thoáng khí, hỗ trợ ngồi lâu khi chơi game và làm việc.",
        image: "../images/products/chair2.jpg",
        specs: {
            "Chất liệu": "Vải mềm thoáng khí + Khung thép",
            "Tựa lưng": "Ngả 90°–180°",
            "Tay vịn": "Điều chỉnh 4D",
            "Đệm": "Foam mật độ cao",
            "Bánh xe": "PU chống trượt, xoay 360°",
            "Tải trọng tối đa": "120 kg",
            "Phụ kiện": "Gối đầu + Gối lưng memory foam"
        }
    },
    { 
        id: 7, 
        name: "Chuột Logitech G Pro X Superlight",
        category: "mouse",
        price: 2190000,
        description: "Chuột gaming không dây Logitech G Pro X Superlight siêu nhẹ, cảm biến HERO 25K chính xác cao, thiết kế tối ưu cho game thủ chuyên nghiệp.",
        image: "../images/products/mouse1.jpg",
        specs: {
            "Cảm biến": "HERO 25K",
            "DPI": "100 – 25.600 DPI",
            "Trọng lượng": "~63g (siêu nhẹ)",
            "Kết nối": "Lightspeed Wireless",
            "Pin": "Lên đến 70 giờ",
            "Số nút": "5 nút lập trình",
            "Tương thích": "Windows / macOS"
        }
    },
    { 
        id: 8, 
        name: "Pad chuột Razer Gigantus V2",
        category: "accessory",
        price: 490000,
        description: "Pad chuột Razer Gigantus V2 bề mặt vải micro-weave tối ưu cho tốc độ và kiểm soát, đế cao su chống trượt, phù hợp game thủ và làm việc văn phòng.",
        image: "../images/products/mouse2.jpg",
        specs: {
            "Kích thước": "450 x 400 x 3 mm (Size Large)",
            "Chất liệu bề mặt": "Micro-weave cloth",
            "Đế": "Cao su chống trượt",
            "Độ dày": "3mm",
            "Tối ưu": "Chuột quang và laser",
            "Viền": "Không bo viền (tối giản)"
        }
    },
    { 
        id: 9, 
        name: "Đèn BenQ ScreenBar Plus",
        category: "accessory",
        price: 1890000,
        description: "Đèn BenQ ScreenBar Plus thiết kế kẹp màn hình thông minh, chiếu sáng không gây chói, có núm điều khiển rời điều chỉnh độ sáng và nhiệt độ màu linh hoạt.",
        image: "../images/products/accessory1.jpg",
        specs: {
            "Công suất": "5W",
            "Nhiệt độ màu": "2700K – 6500K",
            "Độ rọi": "Lên đến 1000 lux",
            "Điều khiển": "Núm xoay cảm ứng rời",
            "Nguồn điện": "USB 5V",
            "Tính năng": "Tự động điều chỉnh độ sáng (Auto-Dimming)",
            "Tương thích": "Màn hình 13\" – 27\""
        }
    },
    { 
        id: 10, 
        name: "Arm màn hình NB F80",
        category: "accessory",
        price: 850000,
        description: "Arm màn hình NB F80 thiết kế công thái học, hỗ trợ nâng hạ linh hoạt, xoay 360°, giúp tối ưu không gian bàn làm việc và cải thiện tư thế ngồi.",
        image: "../images/products/accessory2.jpg",
        specs: {
            "Kích thước màn hình hỗ trợ": "17\" – 30\"",
            "Tải trọng": "2kg – 9kg",
            "Chuẩn VESA": "75x75mm / 100x100mm",
            "Góc nghiêng": "-30° đến +85°",
            "Xoay": "360°",
            "Chất liệu": "Hợp kim nhôm + thép",
            "Lắp đặt": "Kẹp bàn hoặc khoan bàn"
        } 
    },   
    { 
        id: 11, 
        name: "Bàn phím cơ AULA F75",
        category: "keyboard",
        price: 1490000,
        description: "Bàn phím cơ AULA F75 layout 75% nhỏ gọn, hỗ trợ kết nối 3 chế độ (Bluetooth, 2.4G Wireless, USB-C), LED RGB nổi bật, phù hợp làm việc và gaming.",
        image: "../images/products/aulaf75.jpg",
        specs: {
            "Switch": "AULA Reaper / Graywood (Hot-swappable)",
            "Layout": "75% (81 phím)",
            "Kết nối": "Bluetooth 5.0 / 2.4G Wireless / USB-C",
            "Pin": "4000mAh",
            "Đèn": "RGB 16.8 triệu màu",
            "Keycaps": "PBT Double-shot",
            "Tính năng": "Núm xoay điều chỉnh âm lượng"
        }
    },
    { 
        id: 12, 
        name: "Màn hình Gaming ASUS TUF VG27AQ5A 27 inch",
        category: "monitor",
        price: 4990000,
        description: "Màn hình gaming ASUS TUF VG27AQ5A 27 inch độ phân giải QHD, tần số quét 170Hz, tấm nền IPS cho màu sắc sống động và chuyển động mượt mà, phù hợp game thủ chuyên nghiệp.",
        image: "../images/products/manasus.jpg",
        specs: {
            "Kích thước": "27 inch",
            "Độ phân giải": "2560 x 1440 (QHD)",
            "Tấm nền": "Fast IPS",
            "Tần số quét": "170Hz (OC)",
            "Thời gian phản hồi": "1ms (MPRT)",
            "Công nghệ": "Adaptive-Sync / ELMB Sync",
            "Độ sáng": "300 nits",
            "Cổng kết nối": "HDMI, DisplayPort"
        }
    },
    { 
        id: 13, 
        name: "Ghế Gaming CHAHO Y55 - ĐEN",
        category: "chair",
        price: 1500000,
        description: "Ghế Gaming CHAHO Y55 màu đen thiết kế thể thao hiện đại, đệm mút dày êm ái, hỗ trợ ngồi lâu khi chơi game hoặc làm việc.",
        image: "../images/products/ghegaming.jpg",
        specs: {
            "Chất liệu": "Da PU cao cấp + Khung thép",
            "Tựa lưng": "Ngả 90° – 135°",
            "Tay vịn": "Điều chỉnh 2D",
            "Đệm": "Foam mật độ cao chống xẹp lún",
            "Bánh xe": "Xoay 360° chống ồn",
            "Trụ thủy lực": "Class 3",
            "Tải trọng tối đa": "120 kg"
        }
    },
    { 
        id: 14, 
        name: "Chuột TEKKIN INPHIC PM6",
        category: "mouse",
        price: 499000,
        description: "Chuột không dây TEKKIN INPHIC PM6 thiết kế công thái học, kết nối kép 2.4G Wireless và Bluetooth, pin sạc tiện lợi, phù hợp làm việc và học tập.",
        image: "../images/products/chuotPM6.jpg",
        specs: {
            "DPI": "800 / 1200 / 1600 / 2400",
            "Kết nối": "2.4G Wireless + Bluetooth 5.0",
            "Pin": "Sạc USB (500mAh)",
            "Số nút": "6 nút",
            "Thiết kế": "Công thái học, chống trượt",
            "Tương thích": "Windows / macOS / Laptop"
        } 
    },
    { 
        id: 15, 
        name: "Chuột Silent Gaming Atas F30",
        category: "mouse",
        price: 799000,
        description: "Chuột Silent Gaming Atas F30 thiết kế gọn nhẹ, nút bấm êm không gây tiếng ồn, DPI điều chỉnh linh hoạt, phù hợp chơi game và làm việc văn phòng.",
        image: "../images/products/chuotf30.jpg",
        specs: {
            "DPI": "800 / 1200 / 1600 / 2400",
            "Kết nối": "USB Wired",
            "Số nút": "6 nút",
            "Thiết kế": "Silent Click giảm tiếng ồn",
            "Đèn": "LED RGB",
            "Trọng lượng": "~95g",
            "Tương thích": "Windows / macOS"
        }
    },
    { 
        id: 16, 
         name: "Tai nghe Gaming Hoco W113",
        category: "headphone",
        price: 540000,
        description: "Tai nghe Gaming Hoco W113 thiết kế chụp tai thoải mái, âm thanh stereo sống động, micro chống ồn, phù hợp chơi game và giải trí.",
        image: "../images/products/tainghe.jpg",
        specs: {
            "Driver": "50mm",
            "Kết nối": "Jack 3.5mm",
            "Micro": "Có, chống ồn",
            "Đèn": "LED RGB",
            "Dải tần": "20Hz – 20kHz",
            "Độ nhạy": "~98dB",
            "Tương thích": "PC / Laptop / PS / Xbox"
        }
    },
    { 
        id: 17, 
        name: "Hub USB-C 8 trong 1",
        category: "accessory",
        price: 320000,
        description: "Hub USB-C 8 trong 1 mở rộng cổng kết nối cho laptop, tích hợp HDMI, USB 3.0, khe thẻ nhớ và sạc PD, phù hợp làm việc văn phòng và setup đa màn hình.",
        image: "../images/products/hub.jpg",
        specs: {
            "Cổng HDMI": "4K @30Hz",
            "USB": "3 x USB 3.0",
            "Thẻ nhớ": "SD / microSD",
            "Sạc nhanh": "USB-C Power Delivery 100W",
            "Cổng mạng": "RJ45 Gigabit (tùy phiên bản)",
            "Chất liệu": "Hợp kim nhôm",
            "Tương thích": "MacBook / Laptop USB-C / Windows"
        } 
    },
    { 
        id: 18, 
        name: "Đầu nối cổng HDMI",
        category: "accessory",
        price: 100000,
        description: "Đầu nối cổng HDMI hỗ trợ truyền tín hiệu hình ảnh và âm thanh chất lượng cao, thiết kế nhỏ gọn, tiện lợi khi kết nối màn hình, TV hoặc máy chiếu.",
        image: "../images/products/hdmi.jpg",
        specs: {
            "Chuẩn HDMI": "HDMI 2.0",
            "Độ phân giải hỗ trợ": "4K @60Hz",
            "Chất liệu": "Hợp kim nhôm + lõi đồng",
            "Chiều dài": "Loại nối trực tiếp (không dây)",
            "Tính năng": "Truyền tải hình ảnh & âm thanh đồng thời",
            "Tương thích": "PC / Laptop / TV / Máy chiếu / PS / Xbox"
        }
    },
    { 
        id: 19, 
        name: "Ổ Cắm Điện Đa Năng Deli",
        category: "accessory",
        price: 382000,
        description: "Ổ cắm điện đa năng Deli thiết kế an toàn, tích hợp nhiều cổng cắm và cổng USB sạc nhanh, phù hợp cho setup bàn làm việc và gaming.",
        image: "../images/products/odien.jpg",
        specs: {
            "Số ổ cắm": "4 – 6 ổ (tùy phiên bản)",
            "Cổng USB": "2 x USB 5V",
            "Công suất tối đa": "2500W",
            "Chất liệu": "Nhựa ABS chống cháy",
            "Chiều dài dây": "2m",
            "Tính năng an toàn": "Công tắc riêng + Bảo vệ quá tải",
            "Điện áp": "220V – 50Hz"
        }
    },
    { 
        id: 20, 
       name: "Giá Kê Chân Văn Phòng Ergonomic",
        category: "accessory",
        price: 400000,
        description: "Giá kê chân văn phòng thiết kế công thái học giúp cải thiện tư thế ngồi, giảm áp lực lên lưng và chân khi làm việc lâu dài.",
        image: "../images/products/gacchan.jpg",
        specs: {
            "Chất liệu": "Nhựa ABS cao cấp + Đế chống trượt",
            "Kích thước": "450 x 330 x 110 mm",
            "Góc nghiêng": "Điều chỉnh linh hoạt",
            "Tính năng": "Massage chân + Chống trượt",
            "Tải trọng": "Lên đến 100kg",
            "Phù hợp": "Bàn làm việc / Setup văn phòng"
        }
    },
    { 
        id: 21, 
        name: "Đèn LED Trang Trí RGB",
        category: "accessory",
        price: 100000,
        description: "Đèn LED trang trí RGB tạo hiệu ứng ánh sáng sinh động cho góc setup gaming và làm việc, dễ dàng điều chỉnh màu sắc và chế độ sáng.",
        image: "../images/products/led.jpg",
        specs: {
            "Chiều dài": "5 mét",
            "Màu sắc": "RGB 16 triệu màu",
            "Điều khiển": "Remote / App (tùy phiên bản)",
            "Nguồn điện": "Adapter 12V",
            "Chế độ": "Nháy theo nhạc / Đổi màu tự động",
            "Lắp đặt": "Dán tường / Bàn / Sau màn hình"
        } 
        },
];
// 1. HIỂN THỊ SẢN PHẨM
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category') || 'all';
    const filtered = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);

    grid.innerHTML = filtered.map(p => `
        <div class="product-card">
            <div class="product-image" onclick="showDetail(${p.id})">
                <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Lỗi+Ảnh'">
                <div class="overlay"><i class="fas fa-search-plus"></i> Xem chi tiết</div>
            </div>
            <div class="product-info">
                <span class="badge">${p.category}</span>
                <h3>${p.name}</h3>
                <div class="product-price">${p.price.toLocaleString()} ₫</div>
                <button class="add-btn" onclick="addToCart(${p.id})">Thêm vào giỏ</button>
            </div>
        </div>
    `).join('');
}

// 2. GIỎ HÀNG (THÊM, XÓA, CẬP NHẬT)
function addToCart(id) {
    const p = PRODUCTS.find(x => x.id === id);
    let cart = JSON.parse(localStorage.getItem('techdecor_cart')) || [];
    let item = cart.find(i => i.id === id);
    
    if(item) item.quantity++; 
    else cart.push({...p, quantity: 1});
    
    localStorage.setItem('techdecor_cart', JSON.stringify(cart));
    updateCartIcon(); // Cập nhật số lượng trên icon giỏ hàng

    // Gọi hàm hiện thông báo
    showToast(`🛒 Đã thêm ${p.name} vào giỏ!`);
}

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('techdecor_cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('techdecor_cart', JSON.stringify(cart));
    if (typeof renderCartPage === 'function') renderCartPage();
    updateCartIcon();
    showToast("🗑️ Đã xóa sản phẩm");
}

function updateQuantity(id, delta) {
    let cart = JSON.parse(localStorage.getItem('techdecor_cart')) || [];
    let item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) return removeFromCart(id);
        localStorage.setItem('techdecor_cart', JSON.stringify(cart));
        if (typeof renderCartPage === 'function') renderCartPage();
        updateCartIcon();
    }
}

function updateCartIcon() {
    const cart = JSON.parse(localStorage.getItem('techdecor_cart')) || [];
    const total = cart.reduce((s, i) => s + i.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = total);
}

// 3. THÔNG BÁO TOAST (THAY THẾ ALERT)
function showToast(message) {
    // Tạo một phần tử div mới
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    
    // Thêm vào trang web
    document.body.appendChild(toast);
    
    // Tự động xóa sau 3 giây
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// 4. MODAL CHI TIẾT
// 4. MODAL CHI TIẾT (Đã nâng cấp)
function showDetail(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;

    // Đổ dữ liệu cơ bản
    document.getElementById('modalImg').src = p.image;
    document.getElementById('modalTitle').innerText = p.name;
    document.getElementById('modalPrice').innerText = p.price.toLocaleString() + " ₫";
    
    // Sửa lỗi undefined cho mô tả (Kiểm tra cả desc và description)
    const moTa = p.description || p.desc || "Đang cập nhật mô tả cho sản phẩm này...";
    document.getElementById('modalDesc').innerHTML = `<p style="color: #64748b; line-height: 1.6;">${moTa}</p>`;

    // Thêm phần hiển thị Thông số kỹ thuật (Specs) tự động
    let specsHTML = '';
    if (p.specs) {
        specsHTML = `
            <div style="margin-top: 20px; background: #f8fafc; padding: 15px; border-radius: 10px;">
                <h4 style="margin-bottom: 10px; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">Thông số kỹ thuật:</h4>
                <div style="font-size: 0.9rem;">
                    ${Object.entries(p.specs).map(([key, value]) => `
                        <div style="display: flex; justify-content: space-between; padding: 5px 0; border-bottom: 1px dashed #cbd5e1;">
                            <strong style="color: #475569;">${key}:</strong>
                            <span style="color: #64748b;">${value}</span>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    } else {
        specsHTML = `<p style="margin-top: 15px; font-style: italic; color: #94a3b8;">(Thông số kỹ thuật đang được cập nhật)</p>`;
    }

    // Chèn specsHTML vào dưới phần mô tả trong Modal
    // Lưu ý: Bạn có thể cần thêm một thẻ div có id="modalSpecs" trong HTML của Modal
    const descElement = document.getElementById('modalDesc');
    descElement.innerHTML += specsHTML;

    document.getElementById('productModal').style.display = "flex";
}

function closeModal() { document.getElementById('productModal').style.display = "none"; }

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartIcon();
});