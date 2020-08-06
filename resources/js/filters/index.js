export default {
    money(value) {
        return value != ''
            ? `$${value}`
            : "$"
    }
}
