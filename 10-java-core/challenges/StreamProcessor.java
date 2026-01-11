package challenges;

import java.util.List;
import java.util.OptionalDouble;

public class StreamProcessor {
    public static OptionalDouble averageOfEvens(List<Integer> numbers) {
        if (numbers == null || numbers.isEmpty()) {
            return OptionalDouble.empty();
        }
        return numbers.stream()
                .filter(n -> n % 2 == 0)
                .mapToInt(Integer::intValue)
                .average();
    }
}
