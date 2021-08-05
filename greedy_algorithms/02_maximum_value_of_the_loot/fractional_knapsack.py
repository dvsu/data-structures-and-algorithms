# implementation of fractional knapsack problem
# result is the maximum value and it has to be returned at least
# four digits after the decimal point

# input format
# n W
# v0 w0
# v1 w1
# ...
# vi wi
#
# n = number of items
# W = capacity of knapsack
# vi = the i-th item value
# wi = the 1-th item weight

# Performance
# Max time used: 0.01/5.00, max memory used: 9306112/671088640.

def get_optimal_value(capacity, weights, values):
    value = 0.0

    ratio = sorted([(v/w, order)
                   for order, (v, w) in enumerate(zip(values, weights))], reverse=True)

    remaining = capacity

    for r, i in ratio:
        if remaining < weights[i]:
            value += (remaining / weights[i]) * values[i]
            return value

        value += values[i]
        remaining -= weights[i]

    return value


if __name__ == "__main__":

    n, W = map(int, input().split(' '))

    values = []
    weights = []

    for _ in range(n):
        v, w = map(int, input().split(' '))
        values.append(v)
        weights.append(w)

    print(f"{get_optimal_value(W, weights, values):.5f}")
