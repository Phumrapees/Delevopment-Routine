def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    print(f"n :{n}, i :{i} left :{left}, right :{right}")

    if left < n and arr[left] > arr[largest]:
        largest = left

    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)
    print(f"เริ่มต้น: {arr}\n")

    # --- ส่วนที่ 1: Build Max-Heap ---
    print("--- ขั้นตอนที่ 1: สร้าง Max-Heap ---")
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
        print(f"จัด Heapify ที่ index {i}: {arr}")

    # --- ส่วนที่ 2: Sorting ---
    print("\n--- ขั้นตอนที่ 2: เริ่มการดึงค่ามากที่สุดออก (Sort) ---")
    for i in range(n - 1, 0, -1):
        # สลับตัวหน้าสุด (มากสุด) ไปไว้ข้างหลัง
        arr[0], arr[i] = arr[i], arr[0]
        print(f"สลับ {arr[i]} (ค่ามากสุด){i} ไปท้าย: {arr[:i]} | {arr[i:]}")
        
        # จัดระเบียบ Heap ใหม่ในกองที่เหลือ
        heapify(arr, i, 0)
        print(f"   จัดระเบียบ Heap ใหม่: {arr[:i]}")

# ทดสอบ
#data = [85, 70, 45, 30, 25, 15, 60]
data = [12, 6, 10, 5, 1, 9]
heap_sort(data)
print(f"\nผลลัพธ์สุดท้าย: {data}")