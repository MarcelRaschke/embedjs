module.exports = `<div class="iframely-option">
    <label class="iframely-option__label" for="<%- key %>"><%- label %>:</label>
    <div class="iframely-option__group">
        <input type="range" class="iframely-option__range" id="<%- key %>" name="<%- key %>" min="<%- min %>" max="<%- max %>" step="1" value="<%- value %>" style="--min: <%- min %>; --max: <%- max %>; --val: <%- value %>;">
    </div>
</div>`;