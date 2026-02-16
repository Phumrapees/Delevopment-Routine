def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left

    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
        print(f"จัด Heapify ที่ index {i}: {arr}")

    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)
        print(f"   จัดระเบียบ Heap ใหม่: {arr[:i]}")

# ทดสอบ
data = [12, 6, 10, 5, 1, 9]
heap_sort(data)
print(f"\nผลลัพธ์สุดท้าย: {data}")