from collections import defaultdict

encoder = {
    "vowel": "aeiou",
    "consonant": "bcdfghjklmnpqrstvwxyz"
}

defaults = {
    "a": 0,
    "b": 0,
    "c": 1,
    "d": 2,
    "e": 1,
    "f": 3,
    "g": 4,
    "h": 5,
    "i": 2,
    "j": 6,
    "k": 7,
    "l": 8,
    "m": 9,
    "n": 10,
    "o": 3,
    "p": 11,
    "q": 12,
    "r": 13,
    "s": 14,
    "t": 15,
    "u": 4,
    "v": 16,
    "w": 17,
    "x": 18,
    "y": 19,
    "z": 20
}

test_count = int(input())

for _ in range(test_count):
    string = input()
    if not string.isalpha():
        continue
    table = defaultdict(int)
    result = ""
    for c in string:
        prev_idx = table[c]
        lookup = "consonant"
        mod = 21
        inc = 5
        if c not in encoder["vowel"]:
            lookup = "vowel"
            mod, inc = inc, mod

        if prev_idx == 0:
            prev_idx = defaults[c]

        result += encoder[lookup][prev_idx % mod]
        table[c] = prev_idx + inc

    print(result)
