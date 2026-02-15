/**
 * Заглушка для @react-native-async-storage/async-storage.
 * Нужна только для веб-сборки: @metamask/sdk тянет этот пакет, но в браузере он не используется.
 */
const noop = () => Promise.resolve();
const noopNull = () => Promise.resolve(null);

module.exports = {
  default: {
    getItem: noopNull,
    setItem: noop,
    removeItem: noop,
    mergeItem: noop,
    getAllKeys: () => Promise.resolve([]),
    clear: noop,
  },
};
