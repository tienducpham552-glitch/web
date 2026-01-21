import streamlit as st
import streamlit.components.v1 as components

# 1. Cấu hình tiêu đề trang trên trình duyệt
st.set_page_config(page_title="Innerly AI", layout="wide")

# 2. Hàm đọc nội dung file
def load_html():
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()
    with open("style.css", "r", encoding="utf-8") as f:
        css = f.read()
    with open("script.js", "r", encoding="utf-8") as f:
        js = f.read()
    
    # Gộp tất cả vào 1 chuỗi để Streamlit hiểu
    return html.replace("style.css", f"text/css\n{css}").replace("script.js", f"text/javascript\n{js}")

# 3. Hiển thị lên màn hình
html_content = load_html()
components.html(html_content, height=1200, scrolling=True)
