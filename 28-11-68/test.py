def main():
    data = input("Enter some data: ")
    try:
        data = float(data)
    except ValueError:
        print("Invalid input. Please enter a number.")
        main()
    check = input("Want to check again? (y/n): ")
    if check.lower() == 'y':
        main()
    else:
        print("Exiting the program.")

if __name__ == "__main__":
    main()