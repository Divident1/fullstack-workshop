package challenges;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class CollectionAnalyzer {
    public static Map<Integer, List<String>> groupByLength(List<String> words) {
        if (words == null) return Map.of();
        return words.stream()
                .collect(Collectors.groupingBy(String::length));
    }

    public static Map<Character, Long> charFrequency(List<String> words) {
        if (words == null) return Map.of();
        return words.stream()
                .flatMapToInt(String::chars)
                .mapToObj(c -> (char) c)
                .collect(Collectors.groupingBy(c -> c, Collectors.counting()));
    }
}
