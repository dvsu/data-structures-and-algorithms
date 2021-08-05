# find the minimum coins needed to change the input integer value
# into coins with denominations 1, 5, and 10

# Performance
# Max time used: 0.01/5.00, max memory used: 9121792/536870912.

def get_change(m):
    ten, rem = m // 10, m % 10
    return ten + (rem // 5) + (rem % 5)


if __name__ == "__main__":
    print(get_change(int(input())))
