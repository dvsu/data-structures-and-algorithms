from time import time
from gmpy2 import mpz, get_cache, mp_limbsize

num1 = 10**1000000
num2 = 10**1500000

start = time()
result1 = num1 * num2
elapsed1 = time() - start

start = time()
result2 = mpz(num1) * mpz(num2)
elapsed2 = time() - start

print("Test 1: XXLarge integer multiplication test")
print(f"  Python built-in: {elapsed1:.10f}s")
print(f"  GMP (gmpy2): {elapsed2:.10f}s")
print(f"  Both results are same: {result1 == result2}")
print(f"  Power size: {len(str(result2)) - 1}")
print(f"  Performance improvement: {'negligible' if not elapsed2 else str(round(elapsed1 / elapsed2, 3)) + 'x'}")
print(f"  gmpy2 cache size: {get_cache()}")
print(f"  gmpy2 limb size: {mp_limbsize()}")

#####################################################################

num3 = 1234567890**3210
num4 = 9876543210**3210

start = time()
result4 = mpz(num3) * mpz(num4)
elapsed4 = time() - start

start = time()
result3 = num3 * num4
elapsed3 = time() - start

print("\nTest 2: XLarge integer multiplication test")
print(f"  Python built-in: {elapsed3:.10f}s")
print(f"  GMP (gmpy2): {elapsed4:.10f}s")
print(f"  Both results are same: {result3 == result4}")
print(f"  Power size: {len(str(result3)) - 1}")
print(f"  Performance improvement: {'negligible' if not elapsed4 else str(round(elapsed3 / elapsed4, 3)) + 'x'}")
print(f"  gmpy2 cache size: {get_cache()}")
print(f"  gmpy2 limb size: {mp_limbsize()}")

#####################################################################

num5 = 12345678901234567890**30
num6 = 98765432109876543210**30

start = time()
result6 = mpz(num5) * mpz(num6)
elapsed6 = time() - start

start = time()
result5 = num5 * num6
elapsed5 = time() - start

print("\nTest 3: Large integer multiplication test")
print(f"  Python built-in: {elapsed5:.10f}s")
print(f"  GMP (gmpy2): {elapsed6:.10f}s")
print(f"  Both results are same: {result5 == result6}")
print(f"  Power size: {len(str(result5)) - 1}")
print(f"  Performance improvement: {'negligible' if not elapsed6 else str(round(elapsed5 / elapsed6, 3)) + 'x'}")
print(f"  gmpy2 cache size: {get_cache()}")
print(f"  gmpy2 limb size: {mp_limbsize()}")


# Results

# Test 1: XXLarge integer multiplication test
#   Python built-in: 0.8279817104s
#   GMP (gmpy2): 0.0230009556s
#   Both results are same: True
#   Power size: 2500000
#   Performance improvement: 35.998x
#   gmpy2 cache size: (100, 128)
#   gmpy2 limb size: 64

# Test 2: XLarge integer multiplication test
#   Python built-in: 0.0029699802s
#   GMP (gmpy2): 0.0010213852s
#   Both results are same: True
#   Power size: 61266
#   Performance improvement: 2.908x
#   gmpy2 cache size: (100, 128)
#   gmpy2 limb size: 64

# Test 3: Large integer multiplication test
#   Python built-in: 0.0000000000s
#   GMP (gmpy2): 0.0000000000s
#   Both results are same: True
#   Power size: 1172
#   Performance improvement: negligible
#   gmpy2 cache size: (100, 128)
#   gmpy2 limb size: 64
