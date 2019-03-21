module.exports = `<div class="iframely-option">
    <label class="iframely-option__label" for="<%- key %>"><%- label %>:</label>
    <div class="iframely-option__group">
        <input type="text" class="iframely-option__input iframely-option__text" id="<%- key %>" name="<%- key %>" placeholder="<%- placeholder %>" value="<%- value %>">
    </div>
</div>`;